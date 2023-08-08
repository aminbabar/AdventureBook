import React from "react";
import FriendItem from "./friend_item";

const Friends = (props) => {
    const {friends} = props;

    const friendItems = friends.map ((friend) => {
        return (
            <FriendItem friend={friend} />
        );
    });


    return (
        <div className="profile-friends">
            <h1>Friends</h1>
            {friendItems}
        </div>
    );
};

export default Friends;