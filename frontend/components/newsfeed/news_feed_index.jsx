import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostIndexContainer from "../post/post_index_container";


const NewsFeedIndex = (props) => {
    return (
        <div>
            <NavBarContainer />
            <PostIndexContainer />
        </div>
    );
};

export default NewsFeedIndex;