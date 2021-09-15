
import { RECEIVE_ALL_POSTS, RECEIVE_POST } from "../actions/post_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state={}, action) => {
    debugger;
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        case RECEIVE_ALL_POSTS:
            return Object.assign({}, state, action.posts.users);  // IS THIS BAD
        case RECEIVE_POST:
            return Object.assign({}, state, {[action.post.post.author_id]: action.post.user});
        default:
            return state;
    };
};

export default usersReducer;

