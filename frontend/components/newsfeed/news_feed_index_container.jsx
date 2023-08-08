
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import NewsFeedIndex from "./news_feed_index";

const mstp = (state) => {
    return({
        userId: state.session.currentUser
    });
};


const mdtp = (dispatch) => {
    return ({
        fetchPosts: (userId) => dispatch(fetchPosts(userId))
    });
};


export default connect(mstp, mdtp)(NewsFeedIndex);