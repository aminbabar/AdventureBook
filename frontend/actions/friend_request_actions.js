export const RECEIVE_ALL_FRIEND_REQUESTS = "RECEIVE_ALL_FRIEND_REQUESTS";
export const RECEIVE_FRIEND_REQUEST = "RECEIVE_FRIEND_REQUEST";
export const REMOVE_FRIEND_REQUEST = "REMOVE_FRIEND_REQUEST";


import * as friendRequestApiUtil from "../utils/friend_request_api_util";

// action creators
const receiveFriendRequests = friendRequests => {
    return ({
        type: RECEIVE_ALL_FRIEND_REQUESTS,
        friendRequests
    });
};

const receiveFriendRequest = friendRequest => {
    return ({
        type: RECEIVE_FRIEND_REQUEST,
        friendRequest
    });
};

const removeFriendRequest = friendRequestId => {
    return ({
        type: REMOVE_FRIEND_REQUEST,
        friendRequestId
    });
};


// thunk action creators
export const fetchFriendRequests = () => (dispatch) => {
    return friendRequestApiUtil.fetchFriendRequests()
        .then((friendRequests) => dispatch(receiveFriendRequests(friendRequests)));
};

export const fetchFriendRequest = () => (dispatch) => {
    return friendRequestApiUtil.fetchFriendRequest()
        .then((friendRequest) => dispatch(receiveFriendRequest(friendRequest)));
};


export const createFriendRequest = (friendRequest) => (dispatch) => {
    return friendRequestApiUtil.createFriendRequest(friendRequest)
        .then((friendRequest) => dispatch(receiveFriendRequest(friendRequest)));
};


export const deleteFriendRequest = (friendRequestId) => (dispatch) => {
    return friendRequestApiUtil.deleteFriendRequest(friendRequestId)
        .then(() => dispatch(removeFriendRequest(friendRequestId)));
};
