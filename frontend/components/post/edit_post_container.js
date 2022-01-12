import React from "react";

import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updatePost } from "../../actions/post_actions";
import PostForm from "./post_form";

const mstp = (state, ownProps) => {
    return ({
        post: state.entities.posts[ownProps.postId],
        formType: "Edit Post"
    });
};


const mdtp = (dispatch) => {
    return ({
        action: (post, id) => dispatch(updatePost(post, id)),
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mstp, mdtp)(PostForm);