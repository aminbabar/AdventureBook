import React from "react";
import FriendItem from "./friend_item";

const FriendsTab = (props) => {
    const { friends } = props;

    const friendItems = friends.map((friend, idx) => {
        return (
            <FriendItem key={`${idx}${friend.first_name}`} friend={friend} />
        );
    });


    const friendsCount = () => {
        const num_friends = friends.length;
        if (num_friends === 0) {
            return <div className="no-friends">No friends to show</div>
        } else if (num_friends === 1) {
            return <div className="friends-count">{num_friends} friend</div>
        } else {
            return <div className="friends-count">{num_friends} friends</div>
        }
    }


    return (
        <div className="profile-friends-tab">


            <div className="photos-header">
                <div onClick={() => props.switchTab("friends")}>
                    Friends
                </div>
            </div>

            {friendsCount()}

            <div className="friends-container">
                {friendItems}
            </div>

            {/* {noFriendsMessage()} */}

        </div>
    );
};

export default FriendsTab;