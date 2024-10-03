export const selectFriendForProfile = function (friends, userProfileId, currentUserId) {
    let friend;
    Object.values(friends).forEach((ele) => {
        if ((ele.user_id === userProfileId || ele.friend_id === userProfileId) && (ele.friend_id === currentUserId || ele.user_id === currentUserId)) {
            friend = ele;
        }
    });
    return friend;
};

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
};


export const selectPhotos = function (posts, user) {
    if (!user) {
        return [];
    };

    const photos = [];
    Object.values(posts).forEach((post) => {
        if (post.photoUrl && post.author_id === parseInt(user.id)) {
            photos.push(post.photoUrl)
        };
    });

    if (user.profilePhoto) {
        // dont want the default picture. 
        if (user.profilePhoto !== "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png") {
            photos.push(user.profilePhoto);
        }
    };

    if (user.coverPhoto) {
        photos.push(user.coverPhoto);
    };

    return photos;
};


export const selectFriends = function (friends, users, currentUserPageId) {
    const friendItems = []
    Object.values(friends).forEach((friendItem) => {
        if (!friendItem.friend_status) {
            return;
        }
        if (friendItem.friend_id !== parseInt(currentUserPageId)) {
            friendItems.push(users[friendItem.friend_id]);
        } 
        else if (friendItem.user_id !== parseInt(currentUserPageId)) {
            friendItems.push(users[friendItem.user_id]);
        }
    });
    return friendItems;
};