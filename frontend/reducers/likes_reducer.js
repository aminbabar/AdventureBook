import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";
import { RECEIVE_ALL_POSTS } from "../actions/post_actions";

const likesReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case REMOVE_LIKE:
            delete newState[action.like.id];
            return newState;
        case RECEIVE_ALL_POSTS:
            return Object.assign(newState, action.posts.likes);
        default:
            return oldState;
    };
};

export default likesReducer;