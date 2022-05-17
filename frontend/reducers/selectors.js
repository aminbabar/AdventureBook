export const friendRequest = function (friends, userProfileId) {
    let friendRequest;
    Object.values(friends).forEach((ele) => {
        if (ele.friend_id === userProfileId && !ele.friend_status) {
            friendRequest = ele;
        } 
    });
    return friendRequest;
};
