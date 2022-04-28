import React from 'react';


class ProfileAndCoverPhoto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photoFile: null
            // profilePhotoFile: null
        }


        // this.handleCoverPhotoSubmit = this.handleCoverPhotoSubmit.bind(this);
        // this.handleProfilePhotoSubmit = this.handleProfilePhotoSubmit.bind(this);
        this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
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
                <div className='profile-cover-photo-div'>
                    <img src={coverPhoto} />
                </div>
                <label className='profile-cover-photo-button-label'>
                    Add Cover Photo
                    <input className='profile-cover-photo-button' type="file" onChange={this.handlePhotoSubmit('cover_photo')}/>
                </label>

                <div className='profile-profile-photo-div'>
                    <img src={profilePhoto} />
                </div>

                <label className='profile-profile-photo-button-label'>
                    profile
                    <input className='profile-profile-photo-button' type="file" onChange={this.handlePhotoSubmit('profile_photo')}/>
                </label>
            </>
        );
    }
}


export default ProfileAndCoverPhoto;



