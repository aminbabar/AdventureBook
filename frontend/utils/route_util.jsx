
import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mstp = (state) => {
    return {
        loggedIn: Boolean(state.session.currentUser)
    };
};

const Auth = ({loggedIn, path, component: Component, exact}) => {
    return (
            <Route
                path={path}
                exact={exact}
                render={(props) => {
                    return( loggedIn ? <Redirect to="/" /> : <Component {...props}/>)
                }}
            />
        );
};


const Protected = ({ loggedIn, path, component: Component, exact }) => {
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) => {
                return (loggedIn ? <Component {...props} /> : <Redirect to="/login" /> )
            }}
        />
    );
};



export const AuthRoute = withRouter(connect(mstp)(Auth));
export const ProtectedRoute = withRouter(connect(mstp)(Protected));