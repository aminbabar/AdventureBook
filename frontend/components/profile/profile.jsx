import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostIndexContainer from '../post/post_index_container';
import ProfileAndCoverPhoto from './profile_and_cover_photo';
import Intro from './intro';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {updateUser, userId, fetchUser, user, openModal} = this.props;

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
                    />
                </div>

                <div>
                    Nav bar for the profile page with posts and friends tab and add friends
                </div>

                <div className='profile-body'>
                    <div className='profile-left'>
                        <Intro user={user} updateUser={updateUser}/>

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