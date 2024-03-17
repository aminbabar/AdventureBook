import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostIndexContainer from "../post/post_index_container";


class NewsFeedIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.userId);
    }

    render() {
        return (
            <div>
                <NavBarContainer />
    
                <div className="newsfeed">
                    <div>
                            {/* Left scroll bar */}
                    </div>
    
                    <PostIndexContainer />
    
                    <div>
                        {/* Right scroll bar */}
                    </div>
    
                </div>
            </div>
        );
    }
};

export default NewsFeedIndex;