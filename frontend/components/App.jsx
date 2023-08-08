
import React from "react";
import LoginFormContainer from "./session_form/login_form_container";
import { AuthRoute, ProtectedRoute} from "../utils/route_util";

import Modal from "./modal/modal";
import ProfileContainer from "./profile/profile_container";
import NewsFeedIndexContainer from "./newsfeed/news_feed_index_container";

const App = () => {
    return(
        <div>
            <Modal />
            <ProtectedRoute exact path="/" component={NewsFeedIndexContainer}/>
            <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
            <AuthRoute path="/login" component={LoginFormContainer}/>
        </div>
    );
};



export default App;