import React from "react";
import { Link } from "react-router-dom";


const FriendItem = function (props) {
    const {friend} = props;
    // debugger;
    console.log(friend)
    return (
        <>
            <Link to={`${friend.id}`}>
                <img className="test-photo" src={friend?.profilePhoto}/>
                <p>{friend.fname} {friend.lname}</p>
            </Link>
        </>
    );
};


export default FriendItem;