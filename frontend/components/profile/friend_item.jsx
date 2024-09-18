import React from "react";
import { Link } from "react-router-dom";


const FriendItem = function (props) {
    const {friend} = props;
    return (
        <>
            <Link to={`${friend.id}`}>
                <img className="test-photo" src={friend?.profilePhoto}/>
                <p>{friend.first_name} {friend.last_name}</p>
            </Link>
        </>
    );
};


export default FriendItem;