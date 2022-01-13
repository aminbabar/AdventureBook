import React from "react";
import { connect } from "react-redux";
// import { fetchComments } from "../../actions/comment_actions";
import CommentIndexItem from "./comment_index_item";

const CommentIndex = (props) => {
    const comments = props.commentsArr.map((commentId, idx) => {
        return (<CommentIndexItem comment={props.comments[commentId]} key={commentId} />)
    });
    // debugger;
    return (
        <>
            {comments}
        </>
    );
};

const mstp = (state, ownProps) => {
    return ({
        comments: state.entities.comments,
        commentsArr: ownProps.commentsArr
    });
};


// const mdtp = (dispatch) => {
//     return ({
//         // fetchComments: () => dispatch(fetchComments)
//     });
// };


export default connect(mstp, null)(CommentIndex);