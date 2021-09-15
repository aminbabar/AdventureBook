import { combineReducers } from "redux";
import CommentsReducer from "./comments_reducer";
import PostsReducer from "./posts_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: PostsReducer,
    comments: CommentsReducer
});

export default entitiesReducer;
