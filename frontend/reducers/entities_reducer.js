import { combineReducers } from "redux";
import CommentsReducer from "./comments_reducer";
import PostsReducer from "./posts_reducer";
import usersReducer from "./users_reducer";
import friendsReducer from "./friends_reducer";
import likesReducer from "./likes_reducer";
import potentialFriendsReducer from "./potentialFriendsReducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: PostsReducer,
    comments: CommentsReducer,
    friends: friendsReducer,
    likes: likesReducer,
    potentialFriends: potentialFriendsReducer
});

export default entitiesReducer;
