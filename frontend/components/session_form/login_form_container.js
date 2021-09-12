import React from "react";
import { connect } from "react-redux";
import { login, resetErrors } from "../../actions/session_actions"
import LoginForm from "./login_form";

const mstp = (state) => {
    return ({
        errors: state.errors.session
    });
};

const mdtp = (dispatch) => {
    return {
        login: (formUser) => dispatch(login(formUser)),
        resetErrors: () => dispatch(resetErrors())
    };
};


export default connect(mstp, mdtp)(LoginForm);