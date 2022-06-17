import React from "react";
import { connect } from "react-redux";
import Profile from './profile';
import { fetchUser, updateUser } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import { fetchFriends } from "../../actions/friend_actions";
import { selectPhotos } from "../../reducers/selectors";

const mstp = (state, ownProps) => {
    const userId = ownProps.match.params.userId;
    const user = state.entities.users[userId];

    return {
        test: state,
        userId: userId,
        user: user,
        currentUserId: state.session.currentUser,
        photos: selectPhotos(state.entities.posts, user)
    };
};

const mdtp = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        openModal: (modal, user_id) => dispatch(openModal(modal, user_id)),
        fetchFriends: () => dispatch(fetchFriends())
    };
};

export default connect(mstp, mdtp)(Profile)