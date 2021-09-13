import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import CreatePostContainer from "../post/create_post_container";
import PostIndexContainer from "../post/post_index_container";


const NewsFeedIndex = (props) => {
    return (
        <div>
            <NavBarContainer />

            <div className="newsfeed">
                <div>
                        Left scroll bar
                </div>

                <PostIndexContainer />

                <div>
                    Right scroll bar
                </div>

            </div>
        </div>
    );
};

export default NewsFeedIndex;