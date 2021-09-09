import { combineReducers } from "redux";
import PostsReducer from "./posts_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: PostsReducer
});

export default entitiesReducer;
