import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions";
import PostForm from "./post_form";


const mstp = (state) => {
    return ({
        post: {
            body: ""
        },
        formType: "Create Post"
    });
};


const mdtp = (dispatch) => {
    return ({
        action: (post) => dispatch(createPost(post))
    });
};


export default connect(mstp, mdtp)(PostForm);