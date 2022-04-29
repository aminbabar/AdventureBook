import React from "react";

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
        if (this.state.bioEditBool) {
            return( <textarea> </textarea>);// <EditBioContainer />);
        } 
        else if (this.props.user.bio) {
            return(
                <div className="profile-bio">
                    {this.props.user.bio}
                </div>
            );
        } 
        else {
            return (null);
        };
    }

    switchToggle(e) {
        e.preventDefault();
        this.setState((prevState) => {
            return {bioEditBool: !prevState.bioEditBool}
        });
    }


    render() {
        const {user} = this.props;
        const buttonText = user.bio ? "Edit Bio" : "Add Bio";
        return (
            <div>
                <div>a</div>
                <div>a</div>
                <div>a</div>
                <div>a</div>

                {this.bioOrEditBio()}
                <button onClick={this.switchToggle}>{buttonText}</button>
            </div>

        );
    }
}

export default Bio;