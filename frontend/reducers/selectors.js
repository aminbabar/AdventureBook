export const selectFriendForProfile = function (friends, userProfileId, currentUserId) {
    let friend;
    Object.values(friends).forEach((ele) => {
        if ((ele.user_id === userProfileId || ele.friend_id === userProfileId) && (ele.friend_id === currentUserId || ele.user_id === currentUserId)) {
            friend = ele;
        }
    });
    return friend;
}
