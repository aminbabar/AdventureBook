

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

export const  updateFriend = (id) => {
    return $.ajax({
        url: `/api/friends/${id}`,
        method: "PATCH"
    });
}