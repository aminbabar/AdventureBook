
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
        fetchPosts: (userId, source) => dispatch(fetchPosts(userId, source))
    });
};


export default connect(mstp, mdtp)(NewsFeedIndex);