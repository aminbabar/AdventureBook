
import React from "react";
import SignupContainer from "./session_form/signup_container";
import { Route } from "react-router-dom";
import LoginFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute} from "../utils/route_util";
import NewsFeedIndex from "./newsfeed/news_feed_index";

const App = () => {
    return(
        <div>
            <ProtectedRoute exact path="/" component={NewsFeedIndex}/>
            <AuthRoute path="/signup" component={SignupContainer}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
        </div>
    );
};



export default App;