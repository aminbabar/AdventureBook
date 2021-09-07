
import React from "react";
import SignupContainer from "./session_form/signup_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";

const App = () => {
    return(
        <div>
            <Route exact path="/" component={LoginFormContainer}/>
            <Route path="/signup" component={SignupContainer}/>
        </div>
    );
};

export default App;