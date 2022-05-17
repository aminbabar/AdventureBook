import React from "react";
import { connect } from "react-redux";
import { createFriend, deleteFriend } from "../../actions/friend_actions";
import { friendRequest } from "../../reducers/selectors";
// delete friend request
// post friend request
// delete friend
//  COME BACK
class FriendButton extends React.Component {
    constructor(props) {
        super(props);
        this.createFriendRequest = this.createFriendRequest.bind(this);
        this.deleteFriendRequest = this.deleteFriendRequest.bind(this);
    }

    createFriendRequest(e) {
        e.preventDefault();
        this.props.createFriend({friend_id: this.props.user.id})
    }

    deleteFriendRequest(e) {
        e.preventDefault();
        this.props.deleteFriend(this.props.friendRequest.id);
    }

    createOrDeleteFriendRequest() {
        if (this.props.friendRequest) {
            return (<button onClick={this.deleteFriendRequest}>Cancel Request</button>);
        } else {
            return(<button onClick={this.createFriendRequest}>Add Friend</button>);
        };
    }

    render() {
        return (
            <>
                {this.createOrDeleteFriendRequest()}
            </>
        );
    }
}


const mdtp = (dispatch) => {
    return {
        createFriend: (friend) => dispatch(createFriend(friend)),
        deleteFriend: (friendId) => dispatch(deleteFriend(friendId))
    };
};

const mstp = (state, ownProps) => {
    return {
        friendRequest: friendRequest(state.entities.friends, ownProps.user?.id)
    };
};


export default connect(mstp, mdtp)(FriendButton);