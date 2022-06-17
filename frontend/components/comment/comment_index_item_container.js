import { connect } from "react-redux";
import CommentIndexItem from "./comment_index_item";
import { deleteComment } from "../../actions/comment_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import { selectLikesForPost } from "../../reducers/selectors";

const mstp = (state, ownProps) => {
    const likesArr = state.entities.comments[ownProps.commentId].likes;
    const  currentUserId = state.session.currentUser;
    console.log(currentUserId);
    const likes = state.entities.likes;
    return ({
        comment: state.entities.comments[ownProps.commentId],
        likes: selectLikesForPost(likes, likesArr, currentUserId)
    });
}


const mdtp = (dispatch) => {
    return ({
        deleteComment: (id) => dispatch(deleteComment(id)),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId))
    });
}


export default connect(mstp, mdtp)(CommentIndexItem);