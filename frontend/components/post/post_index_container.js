import { connect } from "react-redux";

import PostIndex from "./post_index"

import { fetchPosts, deletePost } from "../../actions/post_actions";
import { openModal } from "../../actions/modal_actions";
import { createLike, deleteLike } from "../../actions/like_actions";


const mstp = (state) => {
    return ({
        posts: Object.values(state.entities.posts),
        users: state.entities.users,
        currentUserId: state.session.currentUser
    });
};


const mdtp = (dispatch) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        deletePost: (postId) => dispatch(deletePost(postId)),
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId))
    });
};

export default connect(mstp, mdtp)(PostIndex);
