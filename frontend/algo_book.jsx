import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
// import {login, logout, signup} from "./utils/session_api_util"

document.addEventListener("DOMContentLoaded", () => {

    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;

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



    // debugger;
    window.getState = store.getState;
    // window.dispatch = store.dispatch;


    const root = document.getElementById("root");

    ReactDOM.render(<Root store={store}/>, root);
})