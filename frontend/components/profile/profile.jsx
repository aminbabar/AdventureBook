import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostIndexContainer from '../post/post_index_container';
import ProfileAndCoverPhoto from './profile_and_cover_photo';
import Intro from './intro';
import Photos from './photos';
import Friends from './friends';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchPosts(this.props.userId);
    }
    

    componentDidUpdate(prevProps) {
        if (this.props.userId !== prevProps.userId) {
            this.props.fetchPosts(this.props.userId);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        };
    }



    render() {
        const {updateUser, userId, fetchUser, user, openModal, currentUserId, photos, friends} = this.props;

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
                        
                        <Photos photos={photos}/>


                        <Friends friends={friends} />

                        



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