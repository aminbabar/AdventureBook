import React from "react";
import { connect } from "react-redux";
import {signup, resetErrors} from "../../actions/session_actions"
import Signup from "./signup";


const mstp = (state) => {
    debugger;
    return ({
        errors: state.errors.session
    })
}

const mdtp = (dispatch) => {
    return {
        signup: (formUser) => dispatch(signup(formUser)),
        resetErrors: () => dispatch(resetErrors())
    };
};


export default connect(mstp, mdtp)(Signup);