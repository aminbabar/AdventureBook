import React from "react";
import { connect } from "react-redux";
import { selectLikesForPost } from "../../reducers/selectors";

import Like from "./like";


const mstp = (state, ownProps) => {
    return ({
        likes: selectLikesForPost(state.entities.likes, ownProps.likesArr, state.session.currentUser)
    });
};


export default connect(mstp, null)(Like);