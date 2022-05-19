import React from "react";
import { connect } from "react-redux";
import { createFriend, deleteFriend, updateFriend } from "../../actions/friend_actions";
import { selectFriendForProfile } from "../../reducers/selectors";


class FriendButton extends React.Component {
    constructor(props) {
        super(props);
        this.createFriendRequest = this.createFriendRequest.bind(this);
        this.deleteFriend = this.deleteFriend.bind(this);
    }

    createFriendRequest(e) {
        e.preventDefault();
        this.props.createFriend({friend_id: this.props.user.id})
    }

    deleteFriend() {
        this.props.deleteFriend(this.props.friend.id);
    }


    render() {
        const { friend, profileId } = this.props;
        // debugger;

        // if two users are not friends
        if (!friend) {
            return (<button onClick={this.createFriendRequest}>Add Friend</button>);
        }

        // if they are friends
        else if (friend.friend_status) {
            return (
                <>
                    <h1>Friends</h1>
                    <button onClick={() => this.deleteFriend(this.props.user.id)}>Unfriend</button>
                </>
            );
        }
        // outgoing friend request
        else if (friend.friend_id === profileId) {
            return (
                <button onClick={this.deleteFriend}>Cancel Request</button>
            );
        }
        // incoming friends request
        else if (friend.user_id === profileId) {
            return (
                <>
                    <button onClick={() => this.props.updateFriend(this.props.user.id)}>confirm request</button>
                    <button onClick={this.deleteFriend}> delete request</button>
                </>
            );
        };
    }
}


const mdtp = (dispatch) => {
    return {
        createFriend: (friend) => dispatch(createFriend(friend)),
        deleteFriend: (friendId) => dispatch(deleteFriend(friendId)),
        updateFriend: (id) => dispatch(updateFriend(id))
    };
};

const mstp = (state, ownProps) => {
    return {
        profileId: ownProps.user?.id,
        friend: selectFriendForProfile(state.entities.friends, ownProps.user?.id, state.session.currentUser)
    };
};


export default connect(mstp, mdtp)(FriendButton);