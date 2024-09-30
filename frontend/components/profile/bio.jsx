import React from "react";
import EditBio from "./editBio";

class Bio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bioEditBool: false
        };

        this.bioOrEditBio = this.bioOrEditBio.bind(this);
        this.switchToggle = this.switchToggle.bind(this);
    }

    bioOrEditBio() {
        const {updateUser, user} = this.props;
        if (this.state.bioEditBool) {
            return( <EditBio 
                        bio={user?.bio} 
                        updateUser={updateUser}
                        user={user}
                        switchToggle={this.switchToggle}
                    />);
        } 
        else {
            const buttonText = (user?.bio) ? "Edit Bio" : "Add Bio";
            return(
                <div className="profile-bio">
                    {this.props.user?.bio}
                    <button onClick={this.switchToggle}>{buttonText}</button>
                </div>
            );
        } 
    }

    switchToggle(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {bioEditBool: !prevState.bioEditBool}
        });
    }


    render() {
        const {user} = this.props;
        return (
            <div>
                {this.bioOrEditBio()}
            </div>

        );
    }
}

export default Bio;