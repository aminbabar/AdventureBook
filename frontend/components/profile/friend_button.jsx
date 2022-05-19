import React from "react";
import { connect } from "react-redux";
import { createFriend, deleteFriend, updateFriend } from "../../actions/friend_actions";
import { incomingFriendRequest, isFriend, outgoingFriendRequest} from "../../reducers/selectors";
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
        let id = this.props.outgoingFriendRequest?.id || this.props.incomingFriendRequest?.id;
        this.props.deleteFriend(id);
    }



    createOrDeleteFriendRequest() {
        if (this.props.outgoingFriendRequest) {
            return (
                <button onClick={this.deleteFriendRequest}>Cancel Request</button>
            );
        } else if (this.props.incomingFriendRequest) {
            return (
                <>
                    <button onClick={ () => this.props.updateFriend(this.props.user.id) }>confirm request</button>
                    <button onClick={this.deleteFriendRequest}> delete request</button>
                </>
            );
        } else if (this.props.isFriend) {
            return (<h1>Friends</h1>);
        }
        else {
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
        deleteFriend: (friendId) => dispatch(deleteFriend(friendId)),
        updateFriend: (id) => dispatch(updateFriend(id))
    };
};

const mstp = (state, ownProps) => {
    return {
        outgoingFriendRequest: outgoingFriendRequest(state.entities.friends, ownProps.user?.id, state.session.currentUser),
        incomingFriendRequest: incomingFriendRequest(state.entities.friends, ownProps.user?.id, state.session.currentUser),
        isFriend: isFriend(state.entities.friends, ownProps.user?.id, state.session.currentUser)
    };
};


export default connect(mstp, mdtp)(FriendButton);