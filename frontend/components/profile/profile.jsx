import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostIndexContainer from '../post/post_index_container';
import ProfileAndCoverPhoto from './profile_and_cover_photo';
import Intro from './intro';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchFriendRequests();
    }

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.props.fetchUser(this.props.userId);
        };
    }



    render() {
        const {updateUser, userId, fetchUser, user, openModal, currentUserId} = this.props;

        return(
            <>
                <NavBarContainer />
                <div className='profile-and-cover-photo'>
                    <ProfileAndCoverPhoto 
                        updateUser={updateUser} 
                        userId={userId}
                        fetchUser={fetchUser}
                        user={user}
                        openModal={openModal}
                        currentUserId={currentUserId}
                    />
                </div>

                <div>
                    Nav bar for the profile page with posts and friends tab and add friends
                </div>

                <div className='profile-body'>
                    <div className='profile-left'>
                        <Intro 
                            user={user} 
                            updateUser={updateUser}
                            openModal={openModal}
                        />

                    </div>

                    <div className='profile-right'>
                        <PostIndexContainer />
                    </div>
                </div>
            </>
        );
    }
};

export default Profile;