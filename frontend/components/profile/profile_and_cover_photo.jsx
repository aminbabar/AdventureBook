import React from 'react';


class ProfileAndCoverPhoto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photoFile: null
            // profilePhotoFile: null
        }

        this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
        this.editProfile = this.editProfile.bind(this);
    }

    editProfile() {
        this.props.openModal("edit_profile", this.props.userId);
    }

    handlePhotoSubmit(fileType) {
        return (e) => {
            const formData = new FormData();
            this.setState({ photoFile: e.currentTarget.files[0] }, () => {
    
                if (this.state.photoFile) {
                    formData.append(`user[${fileType}]`, this.state.photoFile)
                }
                formData.id = this.props.userId;
                this.props.updateUser(formData);
            })
        }
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);
    }


    render() {
        const profilePhoto = this.props.user?.profilePhoto;
        const coverPhoto = this.props.user?.coverPhoto;
        console.log(coverPhoto);
        return (
            <>
                <div className="profile-cover-photo-and-button">
                    <div className='profile-cover-photo-div'>
                        <img src={coverPhoto} />
                    </div>
                    <label className='profile-cover-photo-button-label'>
                        Add Cover Photo
                        <input className='profile-cover-photo-button' type="file" onChange={this.handlePhotoSubmit('cover_photo')}/>
                    </label>

                </div>

                <div className='profile-profile-photo-bar'>
                    <div className='profile-profile-photo-and-button'>
                        <div className='profile-profile-photo-div'>
                            <img src={profilePhoto} />
                        </div>

                        <label className='profile-profile-photo-button-label'>
                            profile
                            <input className='profile-profile-photo-button' type="file" onChange={this.handlePhotoSubmit('profile_photo')}/>
                        </label>
                    </div>
                    
                    <div onClick={this.editProfile}>
                        Edit profile or add friend
                    </div>


                </div>

            </>
        );
    }
}


export default ProfileAndCoverPhoto;



