
import React from "react";
import SignupContainer from "./session_form/signup_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { AuthRoute, ProtectedRoute} from "../utils/route_util";

const App = () => {
    return(
        <div>
            <ProtectedRoute exact path="/" component={NavBarContainer}/>
            <AuthRoute path="/signup" component={SignupContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
        </div>
    );
};



export default App;