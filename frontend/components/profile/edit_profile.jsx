import React from "react";
import Bio from "./bio";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        const {user} = this.props;
        this.state = {
            first_name: user.first_name || "",
            last_name: user.last_name || "",
            city: user.city || "",
            education: user.education || "",
            work: user.work || "",
            portfolio: user.portfolio || "",
            bio: user.bio || ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return(e) => {
            this.setState({[field]: e.currentTarget.value})
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[first_name]', this.state.first_name);
        formData.append('user[last_name]', this.state.last_name);
        formData.append('user[city]', this.state.city);
        formData.append('user[education]', this.state.education);
        formData.append('user[work]', this.state.work);
        formData.append('user[portfolio]', this.state.portfolio);
        formData.append('user[bio]', this.state.bio);

        formData.id = this.props.user.id;
        this.props.updateUser(formData)
            .then(this.props.closeModal());
    }

    render() {
        let { bio } = this.state;

        // removing all the carriage returns
        bio = bio.replaceAll(/[\r]/g, '');
        const charsLength = bio.length >= 0 ? 101 - bio.length : 101;

        let buttonClass = null;
        if (this.prevBio === bio || charsLength < 0) {
            buttonClass = "unclickable";
        }

        const {user, updateUser, currentUserId} = this.props;
        return(
            <form className="edit-profile">
                <h1 className="header">Edit Profile</h1>

                <div className="hr"></div>

                <div className="edit-profile-body">

                    <div className="name-container">
                        <label>
                            <span>First Name</span>
                            <input type="text" value={this.state.first_name} onChange={this.update("first_name")} />
                        </label>

                        <label>
                            <span>Last Name</span>
                            <input type="text" value={this.state.last_name} onChange={this.update("last_name")} />
                        </label>
                    </div>

                    <div className="bio-container">
                        <label className="bio">
                            <span>Bio</span>
                            <textarea value={this.state.bio} onChange={this.update("bio")}></textarea>
                        </label>
                        <div className="chars-remaining">
                            {charsLength} characters remaining
                        </div>
                    </div>

                    <div className="city-education-container">
                        <label>
                            <span>City</span>
                            <input type="text" value={this.state.city} onChange={this.update("city")} />
                        </label>

                        <label>
                            <span>Education</span>
                            <input type="text" value={this.state.education} onChange={this.update("education")} />
                        </label>
                    </div>
                    
                    <div className="work-portfolio-container">
                        <label>
                            <span>Work</span>
                            <input type="text" value={this.state.work} onChange={this.update("work")} />
                        </label>

                        <label>
                            <span>Portfolio Website</span>
                            <input type="text" value={this.state.portfolio} onChange={this.update("portfolio")} />
                        </label>
                    </div>

                    <div className={`update-profile-button ${buttonClass}`} onClick={this.handleSubmit} > Update Profile</div>
                </div>
            </form>
        );
    }
}

export default EditProfile;