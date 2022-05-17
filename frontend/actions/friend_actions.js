export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";


import * as friendApiUtil from "../utils/friend_api_util";

// action creators
const receiveFriends = friends => {
    return ({
        type: RECEIVE_ALL_FRIENDS,
        friends
    });
};

const receiveFriend = friend => {
    return ({
        type: RECEIVE_FRIEND,
        friend
    });
};

const removeFriend = friendId => {
    return ({
        type: REMOVE_FRIEND,
        friendId
    });
};


// thunk action creators
export const fetchFriends = () => (dispatch) => {
    return friendApiUtil.fetchFriends()
        .then((friends) => dispatch(receiveFriends(friends)));
};

export const fetchFriend = () => (dispatch) => {
    return friendApiUtil.fetchFriend()
        .then((friend) => dispatch(receiveFriend(friend)));
};


export const createFriend = (friend) => (dispatch) => {
    return friendApiUtil.createFriend(friend)
        .then((friend) => dispatch(receiveFriend(friend)));
};


export const deleteFriend = (friendId) => (dispatch) => {
    return friendApiUtil.deleteFriend(friendId)
        .then(() => dispatch(removeFriend(friendId)));
};




// ----------
// friend_request_actions.js

// export const RECEIVE_ALL_FRIEND_REQUESTS = "RECEIVE_ALL_FRIEND_REQUESTS";
// export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST";
// export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";


// import * as friendRequestApiUtil from "../utils/friend_api_util";

// // action creators
// const receiveFriendRequests = friendRequests => {
//     return ({
//         type: RECEIVE_ALL_FRIEND_REQUESTS,
//         friendRequests
//     });
// };

// const receiveFriendRequest = friendRequest => {
//     return ({
//         type: RECEIVE_FRIEND_REQUEST,
//         friendRequest
//     });
// };

// const removeFriendRequest = friendRequestId => {
//     return ({
//         type: REMOVE_FRIEND_REQUEST,
//         friendRequestId
//     });
// };


// // thunk action creators
// export const fetchFriendRequests = () => (dispatch) => {
//     return friendRequestApiUtil.fetchFriendRequests()
//         .then((friendRequests) => dispatch(receiveFriendRequests(friendRequests)));
// };

// export const fetchFriendRequest = () => (dispatch) => {
//     return friendRequestApiUtil.fetchFriendRequest()
//         .then((friendRequest) => dispatch(receiveFriendRequest(friendRequest)));
// };


// export const createFriendRequest = (friendRequest) => (dispatch) => {
//     return friendRequestApiUtil.createFriendRequest(friendRequest)
//         .then((friendRequest) => dispatch(receiveFriendRequest(friendRequest)));
// };


// export const deleteFriendRequest = (friendRequestId) => (dispatch) => {
//     return friendRequestApiUtil.deleteFriendRequest(friendRequestId)
//         .then(() => dispatch(removeFriendRequest(friendRequestId)));
// };
