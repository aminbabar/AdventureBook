
import React from "react";
import SignupContainer from "./session_form/signup_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { AuthRoute, ProtectedRoute} from "../utils/route_util";
import PostIndexContainer from "./posts/post_index_container";

const App = () => {
    return(
        <div>
            <ProtectedRoute exact path="/" component={NavBarContainer}/>
            <ProtectedRoute exact path="/feed" component={PostIndexContainer} />
            <AuthRoute path="/signup" component={SignupContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
        </div>
    );
};



export default App;