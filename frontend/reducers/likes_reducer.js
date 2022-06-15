import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const likesReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like;
            return newState;
        case REMOVE_LIKE:
            delete newState[action.likeId];
            return newState;
        default:
            return oldState;
    };
};

export default likesReducer;