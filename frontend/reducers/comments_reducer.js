import { RECEIVE_ALL_COMMENTS, REMOVE_COMMENT, RECEIVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_ALL_POSTS } from "../actions/post_actions";

const CommentsReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments.comments;
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment;
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.comment.id]
            return newState;
        case RECEIVE_ALL_POSTS:
            Object.assign(newState, action.posts.comments);
            return newState;
        case RECEIVE_LIKE:
            if (action.like.likeable_type === "Comment") {
                const commentId = action.like.likeable_id;
                const comment = Object.assign({}, newState[commentId]);
                newState[commentId] = comment;
                newState[commentId].likes = [...newState[commentId].likes, action.like.id]
            }
            return newState;
        case REMOVE_LIKE:
            if (action.like.likeable_type === "Comment") {
                const commentId = action.like.likeable_id;
                const comment = Object.assign({}, newState[commentId]);
                newState[commentId] = comment;
                newState[commentId].likes = newState[commentId].likes.filter((ele) => ele != action.like.id)
            }
            return newState;
        default:
            return oldState;
    };
};


export default CommentsReducer;