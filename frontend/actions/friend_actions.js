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

export const updateFriend = (id) => (dispatch) => {
    return friendApiUtil.updateFriend(id)
        .then((friend) => dispatch(receiveFriend(friend)));
};