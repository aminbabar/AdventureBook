import React, { useRef } from "react";
import { Link } from "react-router-dom";


const FriendItem = function (props) {
    const {friend} = props;
    return (
        <>
            <Link to={`${friend.id}`}>
                <div className="single-photo-container">
                    <img  src={friend?.profilePhoto}/>
                </div>
                <p>{friend.first_name} {friend.last_name}</p>
            </Link>
        </>
    );
};


export default FriendItem;