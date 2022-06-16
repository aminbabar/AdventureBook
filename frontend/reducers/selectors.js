export const selectFriendForProfile = function (friends, userProfileId, currentUserId) {
    let friend;
    Object.values(friends).forEach((ele) => {
        if ((ele.user_id === userProfileId || ele.friend_id === userProfileId) && (ele.friend_id === currentUserId || ele.user_id === currentUserId)) {
            friend = ele;
        }
    });
    return friend;
}

export const selectLikesForPost = function (likes, likesArr, currentUserId) {
    const result = {};
    for (let ele of likesArr) {
        if (likes[ele].author_id === currentUserId) {
            // to check if the current user has liked or not liked the post
            result.currentUser = likes[ele];
        } else {
            result[ele] = likes[ele];
        }
    }
    return result;
}