import { RECEIVE_ALL_POSTS } from "../actions/post_actions";

const potentialFriendsReducer = (oldState = {}, action) => {
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts.potential_friends || {};
        default:
            return oldState;
    };
};

export default potentialFriendsReducer;