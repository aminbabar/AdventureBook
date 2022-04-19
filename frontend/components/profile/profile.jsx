import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import PostIndexContainer from '../post/post_index_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <>
                <NavBarContainer />
                <div>
                    Background cover
                </div>
                <div>
                    Profile picture
                </div>

                <div>
                    Nav bar for the profile page with posts and friends tab and add friends
                </div>

                <div className='profile-body'>
                    <div className='profile-left'>
                        intro and friends container go here
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