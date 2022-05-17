

export const fetchFriends = () => {
    return $.ajax({
        url: `/api/friends`,
        method: "GET"
    });
};

export const fetchFriend = (friendId) => {
    return $.ajax({
        url: `/api/friends/${friendId}`,
        method: "GET"
    });
};

export const createFriend = (friend) => {
    return $.ajax({
        url: `/api/friends`,
        method: "POST",
        data: { friend }
    });
};

export const deleteFriend = (friendId) => {
    return $.ajax({
        url: `/api/friends/${friendId}`,
        method: "DELETE"
    });
};

// friend_request_api_util

// export const fetchFriendRequests = () => {
//     return $.ajax({
//         url: `/api/friend_requests`,
//         method: "GET"
//     });
// };

// export const fetchFriendRequest = (friendRequestId) => {
//     return $.ajax({
//         url: `/api/friend_requests/${friendRequestId}`,
//         method: "GET"
//     });
// };

// export const createFriendRequest = (friend_request) => {
//     return $.ajax({
//         url: `/api/friend_requests`,
//         method: "POST",
//         data: { friend_request }
//     });
// };

// export const deleteFriendRequest = (friendRequestId) => {
//     return $.ajax({
//         url: `/api/friend_requests/${friendRequestId}`,
//         method: "DELETE"
//     });
// };



