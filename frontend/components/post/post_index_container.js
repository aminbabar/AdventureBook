import { connect } from "react-redux";
import PostIndex from "./post_index"
import { deletePost } from "../../actions/post_actions";
import { openModal } from "../../actions/modal_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { withRouter } from "react-router-dom";


const mstp = (state, ownProps) => {
    const userId = ownProps.match.params.userId;

    return ({
        posts: state.entities.posts,
        users: state.entities.users,
        currentUserId: state.session.currentUser,
        source: ownProps.source,
        userId: userId
    });
};


const mdtp = (dispatch) => {
    return ({
        deletePost: (postId) => dispatch(deletePost(postId)),
        openModal: (modal, id) => dispatch(openModal(modal, id)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId))
    });
};

export default withRouter(connect(mstp, mdtp)(PostIndex));
