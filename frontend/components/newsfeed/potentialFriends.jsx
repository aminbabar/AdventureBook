import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PotentialFriends = () => {
    const potentialFriends = useSelector((state) => state.entities.potentialFriends);

    return (
        <div className="potential-friends-container">
            <div className="potential-friends-header">People You May Know</div>
            <div className="potential-friends-body">
                {Object.keys(potentialFriends).length > 0 ? (
                    Object.keys(potentialFriends).map((key, idx) => {
                        const friend = potentialFriends[key];
                        return (
                            <div key={friend.id.toString() + idx.toString()}>
                                <Link className="potential-friends-item" to={`/users/${friend.id}`} >
                                    <div className="image-container">
                                        <img src={friend.profilePhoto} />
                                    </div>

                                    <div className="poetential-friend-user-info">
                                        {`${friend.first_name} ${friend.last_name}`}
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                ) : (
                    <div className="no-results">You are friends with everyone! Way to go!</div>
                )}
            </div>
        </div>
    );
}

export default PotentialFriends;
