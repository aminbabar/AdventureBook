import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
// import {login, logout, signup} from "./utils/session_api_util"

document.addEventListener("DOMContentLoaded", () => {

    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
    const store = configureStore();
    // debugger;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;


    const root = document.getElementById("root");
    ReactDOM.render(<h1>Welcome to AlgoBook</h1>, root);
})