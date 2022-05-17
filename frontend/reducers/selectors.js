export const outgoingFriendRequest = function (friends, userProfileId, currentUserId) {
    let friendRequest;
    Object.values(friends).forEach((ele) => {
        if (ele.friend_id === userProfileId && ele.user_id === currentUserId && !ele.friend_status) {
            friendRequest = ele;
        } 
    });
    return friendRequest;
};


export const incomingFriendRequest = function(friends, userProfileId, currentUserId) {
    let friendRequest;
    Object.values(friends).forEach((ele) => {
        if (ele.user_id === userProfileId && ele.friend_id == currentUserId && !ele.friend_status) {
            friendRequest = ele;
        }
    });
    return friendRequest;
}
