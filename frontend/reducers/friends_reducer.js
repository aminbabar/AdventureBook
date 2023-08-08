import { RECEIVE_ALL_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from "../actions/friend_actions";
import { RECEIVE_ALL_POSTS } from "../actions/post_actions";


const friendsReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);


    switch (action.type) {
        case RECEIVE_ALL_FRIENDS:
            return action.friends;
        case RECEIVE_FRIEND:
            newState[action.friend.id] = action.friend;
            return newState;
        case REMOVE_FRIEND:
            delete newState[action.friendId]
            return newState;
        case RECEIVE_ALL_POSTS:
            return action.posts.friends || {};
        default:
            return oldState;
    };
};


export default friendsReducer;



// ----
// friend_requests_reducer.js
// import { RECEIVE_ALL_FRIEND_REQUESTS, RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST } from "../actions/friend_request_actions";

// const friendRequestsReducer = (oldState = {}, action) => {
//     Object.freeze(oldState);
//     let newState = Object.assign({}, oldState);


//     switch (action.type) {
//         case RECEIVE_ALL_FRIEND_REQUESTS:
//             return action.friendRequests;
//         case RECEIVE_FRIEND_REQUEST:
//             newState[action.friendRequest.id] = action.friendRequest;
//             return newState;
//         case REMOVE_FRIEND_REQUEST:
//             delete newState[action.friendRequestId]
//             return newState;
//         default:
//             return oldState;
//     };
// };


// export default friendRequestsReducer;