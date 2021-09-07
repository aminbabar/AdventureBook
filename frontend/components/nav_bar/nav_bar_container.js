import React from "react";
import { connect } from "react-redux";
import NavBar from "./nav_bar";


import {logout} from "../../actions/session_actions" 


const mstp = (state) => {
    return ({
        currentUser: state.session.currentUser
    });
};


const mdtp = (dispatch) => {
    return ({
        logout: () => dispatch(logout())
    });
};


export default connect(mstp, mdtp)(NavBar);


