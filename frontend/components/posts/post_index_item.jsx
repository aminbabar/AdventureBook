import React from "react";

const PostIndexItem = (props) => {
    return (
        <li className={"post-body"} key={props.post.id}>
            {props.post.body}
        </li>
    );
};

export default PostIndexItem;