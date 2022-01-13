import React from "react";
import { connect } from "react-redux";
// import { fetchComments } from "../../actions/comment_actions";
import CommentIndexItem from "./comment_index_item";

const CommentIndex = (props) => {
    return (
        <CommentIndexItem />
    );
};

const mstp = (state, ownProps) => {
    return ({
        comments: state.comments,
        commentsArr: ownProps.commentsArr
    });
};


// const mdtp = (dispatch) => {
//     return ({
//         // fetchComments: () => dispatch(fetchComments)
//     });
// };


export default connect(mstp, null)(CommentIndex);