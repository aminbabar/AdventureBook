import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import {signup, resetErrors} from "../../actions/session_actions"
import Signup from "./signup";


const mstp = (state) => {
    return ({
        errors: state.errors.session
    })
}

const mdtp = (dispatch) => {
    return {
        signup: (formUser) => dispatch(signup(formUser)),
        resetErrors: () => dispatch(resetErrors()),
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mstp, mdtp)(Signup);