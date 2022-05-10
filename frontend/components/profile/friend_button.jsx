import React from "react";
import { connect } from "react-redux";
import { createFriendRequest, deleteFriendRequest } from "../../actions/friend_request_actions";
import { friendRequest } from "../../reducers/selectors";
// delete friend request
// post friend request
// delete friend
class FriendButton extends React.Component {
    constructor(props) {
        super(props);
        this.createFriendRequest = this.createFriendRequest.bind(this);
        this.deleteFriendRequest = this.deleteFriendRequest.bind(this);
    }

    createFriendRequest(e) {
        e.preventDefault();
        this.props.createFriendRequest({recipient_id: this.props.user.id})
    }

    deleteFriendRequest(e) {
        e.preventDefault();
        this.props.deleteFriendRequest(this.props.friendRequest.id);
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
        createFriendRequest: (friendRequest) => dispatch(createFriendRequest(friendRequest)),
        deleteFriendRequest: (friendRequestId) => dispatch(deleteFriendRequest(friendRequestId))
    };
};

const mstp = (state, ownProps) => {
    return {
        friendRequest: friendRequest(state.entities.friendRequests, ownProps.user?.id)
    };
};


export default connect(mstp, mdtp)(FriendButton);