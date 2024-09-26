import React from "react";
import { connect } from "react-redux";
import { createFriend, deleteFriend, updateFriend } from "../../actions/friend_actions";
import { selectFriendForProfile } from "../../reducers/selectors";
import { FaUserFriends } from "react-icons/fa";
import { TbFriendsOff } from "react-icons/tb";


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

        // if two users are not friends
        if (!friend) {
            return (<div className="friend-button" onClick={this.createFriendRequest}> <FaUserFriends className="friend-logo"/> Add Friend</div>);
        }

        // if they are friends
        else if (friend.friend_status) {
            return (
                <>
                    {/* <div>Friends</div> */}
                    <div className="friend-button" onClick={() => this.deleteFriend(this.props.user.id)}><TbFriendsOff className="unfriend-logo"/> Unfriend</div>
                </>
            );
        }
        // outgoing friend request
        else if (friend.friend_id === profileId) {
            return (
                <div className="friend-button" onClick={this.deleteFriend}>Cancel Request</div>
            );
        }
        // incoming friends request
        else if (friend.user_id === profileId) {
            return (
                <div className="friend-buttons-container">
                    <div className="friend-button blue" onClick={() => this.props.updateFriend(this.props.user.id)}>Confirm request</div>
                    <div className="friend-button" onClick={this.deleteFriend}> Delete request</div>
                </div>
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