import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createPost } from "../../actions/post_actions";
import PostForm from "./post_form";


const mstp = (state) => {
    return ({
        post: {
            body: "",
            photoFile: null,
            photoUrl: null
        },
        formType: "Create Post",
        currentUser: state.entities.users[state.session.currentUser]
    });
};


const mdtp = (dispatch) => {
    return ({
        action: (post) => dispatch(createPost(post)),
        closeModal: () => dispatch(closeModal())
    });
};


export default connect(mstp, mdtp)(PostForm);
