import React from "react";
import Bio from "./bio";

class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        const {user} = this.props;
        this.state = {
            fname: user.fname,
            lname: user.lname,
            city: user.city,
            education: user.education,
            work: user.work,
            portfolio: user.portfolio
        };
    }


    render() {
        const {user, updateUser} = this.props;
        // debugger;
        return(
            <form>
                <h1>Edit profile</h1>

                <label>
                    First Name
                    <input type="text" value={this.state.fname}></input>
                </label>

                <label>
                    Last Name
                    <input type="text" value={this.state.lname}></input>
                </label>

                <label>
                    Bio
                    <Bio user={user} updateUser={updateUser}/>
                </label>
                
                <label>
                    City
                    <input type="text" value={this.state.city}></input>
                </label>

                <label>
                    Education
                    <input type="text" value={this.state.education}></input>
                </label>

                <label>
                    Work
                    <input type="text" value={this.state.work}></input>
                </label>

                <label>
                    Portfolio Website
                    <input type="text" value={this.state.portfolio}></input>
                </label>

                <input type="submit" value="Update Profile"/>
            </form>
        );
    }
}

export default EditProfile;