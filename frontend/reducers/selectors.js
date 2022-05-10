export const friendRequest = function (friendRequests, userProfileId) {
    let friendRequest;
    Object.values(friendRequests).forEach((ele) => {
        if (ele.recipient_id === userProfileId) {
            friendRequest = ele;
        } 
    });
    return friendRequest;
};
