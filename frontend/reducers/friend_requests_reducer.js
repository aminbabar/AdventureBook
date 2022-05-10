import { RECEIVE_ALL_FRIEND_REQUESTS, RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST } from "../actions/friend_request_actions";

const friendRequestsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);


    switch (action.type) {
        case RECEIVE_ALL_FRIEND_REQUESTS:
            return action.friendRequests;
        case RECEIVE_FRIEND_REQUEST:
            newState[action.friendRequest.id] = action.friendRequest;
            return newState;
        case REMOVE_FRIEND_REQUEST:
            delete newState[action.friendRequestId]
            return newState;
        default:
            return oldState;
    };
};


export default friendRequestsReducer;