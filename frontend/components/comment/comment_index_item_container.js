import { connect } from "react-redux";
import CommentIndexItem from "./comment_index_item";
import { deleteComment } from "../../actions/comment_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { selectLikesForPost } from "../../reducers/selectors";
import { openModal } from "../../actions/modal_actions";

const mstp = (state, ownProps) => {
    const likesArr = state.entities.comments[ownProps.commentId].likes;
    const  currentUserId = state.session.currentUser;
    const likes = state.entities.likes;
    const comment = state.entities.comments[ownProps.commentId];
    return ({
        comment: comment,
        likes: selectLikesForPost(likes, likesArr, currentUserId),
        commentAuthor: state.entities.users[comment.comment_author_id],
        currentUserId
    });
}


const mdtp = (dispatch) => {
    return ({
        deleteComment: (id) => dispatch(deleteComment(id)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        openModal: (modal, commentId) => dispatch(openModal(modal, commentId))
    });
}


export default connect(mstp, mdtp)(CommentIndexItem);