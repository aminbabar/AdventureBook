import React from "react";
import Bio from "./bio";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        const {user} = this.props;
        this.state = {
            fname: user.fname || "",
            lname: user.lname || "",
            city: user.city || "",
            education: user.education || "",
            work: user.work || "",
            portfolio: user.portfolio || ""
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
        formData.append('user[fname]', this.state.fname);
        formData.append('user[lname]', this.state.lname);
        formData.append('user[city]', this.state.city);
        formData.append('user[education]', this.state.education);
        formData.append('user[work]', this.state.work);
        formData.append('user[portfolio]', this.state.portfolio);
        formData.id = this.props.user.id;
        this.props.updateUser(formData)
            .then(this.props.closeModal());
    }

    render() {
        const {user, updateUser} = this.props;
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Edit profile</h1>

                <label>
                    First Name
                    <input type="text" value={this.state.fname} onChange={this.update("fname")} />
                </label>

                <label>
                    Last Name
                    <input type="text" value={this.state.lname} onChange={this.update("lname")} />
                </label>

                <label>
                    Bio
                    <Bio user={user} updateUser={updateUser}/>
                </label>
                
                <label>
                    City
                    <input type="text" value={this.state.city} onChange={this.update("city")} />
                </label>

                <label>
                    Education
                    <input type="text" value={this.state.education} onChange={this.update("education")} />
                </label>

                <label>
                    Work
                    <input type="text" value={this.state.work} onChange={this.update("work")} />
                </label>

                <label>
                    Portfolio Website
                    <input type="text" value={this.state.portfolio} onChange={this.update("portfolio")} />
                </label>

                <input type="submit" value="Update Profile"/>
            </form>
        );
    }
}

export default EditProfile;