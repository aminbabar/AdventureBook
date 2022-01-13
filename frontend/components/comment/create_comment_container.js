import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CreateComment from "./create_comment";


const mstp = (state, ownProps) => {
    return({
        postId: ownProps.postId
    });
};


const mdtp = (disptach) => {
    return({
        createComment: (comment) => disptach(createComment(comment))
    });
};


export default connect(mstp, mdtp)(CreateComment);