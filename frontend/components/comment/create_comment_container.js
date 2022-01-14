import { connect } from "react-redux";
import { createComment } from "../../actions/comment_actions";
import CreateComment from "./comment_form";


const mstp = (state, ownProps) => {
    return({
        comment: { body: "", post_id: ownProps.postId}
    });
};


const mdtp = (disptach) => {
    return({
        action: (comment) => disptach(createComment(comment))
    });
};


export default connect(mstp, mdtp)(CreateComment);