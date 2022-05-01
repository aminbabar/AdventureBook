import React from "react";

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
        const {bio} = this.state;

        const charsLength = bio.length > 0 ? 101 - bio.length : 0;
        
        let buttonClass = null;
        if (this.prevBio === bio || charsLength < 0) {
          buttonClass = "unclickable";
        }

        return(
            <>
                <textarea 
                    onChange={this.updateBio} 
                    value={this.state.bio}
                />
                <span>
                    {charsLength} characters remaining
                </span>
                <button onClick={this.props.switchToggle}>Cancel</button>
                <button className={buttonClass} onClick={this.handleSubmit}>Save</button>
            </>
        );
    }
}


export default EditBio;