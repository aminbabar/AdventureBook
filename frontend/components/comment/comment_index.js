import React from "react";
import CommentIndexItemContainer from "./comment_index_item_container";

const CommentIndex = (props) => {
    const comments = props.commentsArr.map((commentId, idx) => {
        return (<CommentIndexItemContainer 
                    commentId={commentId}
                    key={`${commentId.toString()} + ${idx.toString()}`} 
                />);
    });

    return (
        <>
            {comments}
        </>
    );
};


export default CommentIndex;