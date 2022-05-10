

export const fetchFriendRequests = () => {
    return $.ajax({
        url: `/api/friend_requests`,
        method: "GET"
    });
};

export const fetchFriendRequest = (friendRequestId) => {
    return $.ajax({
        url: `/api/friend_requests/${friendRequestId}`,
        method: "GET"
    });
};

export const createFriendRequest = (friend_request) => {
    return $.ajax({
        url: `/api/friend_requests`,
        method: "POST",
        data: { friend_request }
    });
};

export const deleteFriendRequest = (friendRequestId) => {
    return $.ajax({
        url: `/api/friend_requests/${friendRequestId}`,
        method: "DELETE"
    });
};


