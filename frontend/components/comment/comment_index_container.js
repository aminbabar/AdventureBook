import React from "react";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/comment_actions";
// import { fetchComments } from "../../actions/comment_actions";
import CommentIndexItem from "./comment_index_item";

const CommentIndex = (props) => {
    const comments = props.commentsArr.map((commentId) => {
        return (<CommentIndexItem 
                    comment={props.comments[commentId]} 
                    key={commentId} 
                    deleteComment={props.deleteComment}
                />);
    });
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


const mdtp = (dispatch) => {
    return ({
        deleteComment: (id) => dispatch(deleteComment(id))
    });
};


export default connect(mstp, mdtp)(CommentIndex);