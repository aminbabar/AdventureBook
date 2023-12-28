import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { login, resetErrors } from "../../actions/session_actions"
import LoginForm from "./login_form";

const mstp = (state) => {
    return ({
        errors: state.errors.session,
        modal: state.ui.modal?.modal
    });
};

const mdtp = (dispatch) => {
    return {
        login: (formUser) => dispatch(login(formUser)),
        resetErrors: () => dispatch(resetErrors()),
        openModal: (modal) => dispatch(openModal(modal))
    };
};


export default connect(mstp, mdtp)(LoginForm);