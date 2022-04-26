import React from "react";
import { connect } from "react-redux";
import Profile from './profile';
import { fetchUser, updateUser } from "../../actions/session_actions";
const mstp = (state, ownProps) => {
    const userId = ownProps.match.params.userId;
    return {
        test: state,
        userId: ownProps.match.params.userId,
        user: state.entities.users[userId]
    };
};

const mdtp = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    };
};

export default connect(mstp, mdtp)(Profile)