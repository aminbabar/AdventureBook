import React from "react";
import FriendItem from "./friend_item";

const FriendsPreview = (props) => {
    const {friends} = props;

    const friendItems = friends.map ((friend, idx) => {
        if (idx > 8) return;
        return (
            <FriendItem key={`${idx}${friend.first_name}`} friend={friend} />
        );
    });

    
    const friendsCount = () => {
        const num_friends = friends.length;
        if (num_friends === 0) {
            return null
        } else if (num_friends === 1) {
            return <div className="friends-count">{num_friends} friend</div>
        } else {
            return <div className="friends-count">{num_friends} friends</div>
        }
    }


    return (
        <div className="profile-friends-preview">


            <div className="photos-header">
                <div onClick={() => props.switchTab("friends")}>
                    Friends
                </div>
                <div onClick={() => props.switchTab("friends")}>
                    See all friends
                </div>
            </div>

            {friendsCount()}

            <div className="friends-container">
                {friendItems}
            </div>

        </div>
    );
};

export default FriendsPreview;