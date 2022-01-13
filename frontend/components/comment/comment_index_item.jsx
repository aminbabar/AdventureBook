
import React from "react";


class CommentIndexItem extends React.Component {
    render() {
        return <div>{this.props.comment.body}</div>
    };
};

export default CommentIndexItem;