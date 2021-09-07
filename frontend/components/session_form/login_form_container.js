import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions"
import LoginForm from "./login_form";

// const mstp = (state) => {
//     return {
//    
//     };
// };

const mdtp = (dispatch) => {
    return {
        login: (formUser) => dispatch(login(formUser)),
    };
};


export default connect(null, mdtp)(LoginForm);