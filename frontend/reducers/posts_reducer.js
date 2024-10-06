import { RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST } from "../actions/post_actions";
import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const PostsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            if (action.posts.posts) {
                return action.posts.posts;
            } return newState;
        case RECEIVE_POST:
            newState[action.post.post.id] = action.post.post;
            return newState;
        case REMOVE_POST:
            delete newState[action.postId];
            return newState;
        case RECEIVE_COMMENT:
            // Have to dup the post object, and then dup the array to avoid
            // changing old state!
            const arr = Array.from(newState[action.comment.post_id].comments);
            if (arr.includes(action.comment.id)) {
                return newState;
            };
            const post = Object.assign({}, newState[action.comment.post_id]);
            newState[action.comment.post_id] = post;
            newState[action.comment.post_id].comments = arr;
            arr.push(action.comment.id);
            return newState;
        case REMOVE_COMMENT:
            // Have to dup the post object, and then dup the array to avoid
            // changing old state!
            const arr2 = Array.from(newState[action.comment.post_id].comments);
            const post2 = Object.assign({}, newState[action.comment.post_id]);
            newState[action.comment.post_id] = post2;
            const filteredArr = arr2.filter((ele) => ele != action.comment.id)
            newState[action.comment.post_id].comments = filteredArr;
            return newState;
        case RECEIVE_LIKE:
            if (action.like.likeable_type === "Post") {
                const postId = action.like.likeable_id;
                const post = Object.assign({}, newState[postId]);
                newState[postId] = post;
                newState[postId].likes = [...newState[postId].likes, action.like.id]
            }
            return newState;
        case REMOVE_LIKE:
            if (action.like.likeable_type === "Post") {
                const postId = action.like.likeable_id;
                const post = Object.assign({}, newState[postId]);
                newState[postId] = post;
                newState[postId].likes = newState[postId].likes.filter((ele) => ele != action.like.id)
            }
            return newState;
        default:
            return oldState;
    };
};

export default PostsReducer;
