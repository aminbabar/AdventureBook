import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// import {fetchPosts, fetchPost, createPost, deletePost, updatePost} from "./actions/post_actions";
import { fetchUser } from "./actions/session_actions";
// import { fetchComments } from "./utils/comment_api_util";
import { createLike, deleteLike } from "./actions/like_actions";
import { search } from "./utils/user_api_util";
// Testing
// import { fetchPosts, fetchPost, createPost, deletePost, updatePost } from "./utils/post_api_util";
// import {login, logout, signup} from "./utils/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
    // Testing
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    // window.fetchUser = fetchUser;


    // window.fetchPost = fetchPost;
    // window.fetchPosts = fetchPosts;
    // window.createPost = createPost;
    // window.deletePost = deletePost;
    // window.updatePost = updatePost;

    // window.fetchPosts = fetchPosts;

    // window.fetchPost = fetchPost(4);
    // let post = {body:"AAAA"}
    // window.createPost = createPost(post);
    // window.deletePost = deletePost(17);
    // window.updatePost = updatePost();
    // window.fetchComments = fetchComments;

    // window.like = { likeable_type: "Comment", likeable_id: 1 }
    // window.createLike = createLike;
    // window.deleteLike = deleteLike;


    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser }
            },
            session: {currentUser: window.currentUser.id}
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    };

    window.store = store;
    window.like = { likeable_type: "Post", likeable_id: 165 }
    window.createLike = createLike;
    window.deleteLike = deleteLike;

    window.search = search;

    const root = document.getElementById("root");

    ReactDOM.render(<Root store={store}/>, root);
});