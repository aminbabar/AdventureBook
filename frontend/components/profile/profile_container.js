import React from "react";
import { connect } from "react-redux";
import Profile from './profile';

const mstp = (state) => {
    return {
        test: state
    };
};

const mdtp = (dispatch) => {
    return {

    };
};

export default connect(mstp, mdtp)(Profile)