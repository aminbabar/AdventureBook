import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import PostIndexContainer from "../post/post_index_container";
import PotentialFriends from "./potentialFriends";
import MyLinks from "./MyLinks";


class NewsFeedIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.userId, "newsfeed");
    }

    render() {
        return (
            <div>
                <NavBarContainer />
    
                <div className="newsfeed">
                    <div>
                        <MyLinks />
                    </div>
    
                    <PostIndexContainer source="newsfeed"/>
    
                    <div>
                        <PotentialFriends />
                    </div>
                </div>
            </div>
        );
    }
};

export default NewsFeedIndex;