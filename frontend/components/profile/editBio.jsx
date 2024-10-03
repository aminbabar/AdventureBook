import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

class EditBio extends React.Component {
    constructor(props) {
        super(props);
        this.prevBio = this.props.bio;
        const bio = this.props.bio || "";
        this.state = {
            bio: bio
        }
        this.updateBio = this.updateBio.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateBio(e) {
        this.setState({bio: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[bio]', this.state.bio);
        formData.id = this.props.user.id;
        this.props.updateUser(formData)
            .then(this.props.switchToggle(e));
    }


    render() {
        let {bio} = this.state;

        // removing all the carriage returns
        bio = bio.replaceAll(/[\r]/g, '');
        const charsLength = bio.length >= 0 ? 101 - bio.length : 101;
        
        let buttonClass = null;
        if (this.prevBio === bio || charsLength < 0) {
          buttonClass = "unclickable";
        }

        return(
            <>
                <textarea 
                    onChange={this.updateBio}
                    value={this.state.bio}
                    placeholder="Describe who you are"
                />
                <div className="chars-remaining">
                    {charsLength} characters remaining
                </div>

                <div className="bio-save-cancel-bar">
                    <div> <FaGlobeAmericas /> <div>Public</div></div>

                    <div>
                        <div onClick={this.props.switchToggle}>Cancel</div>
                        <div className={buttonClass} onClick={this.handleSubmit}>Save</div>
                    </div>
                </div>
            </>
        );
    }
}


export default EditBio;