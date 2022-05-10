import React from "react";
import Bio from "./bio";
class Intro extends React.Component {
    constructor(props) {
        super(props);
    };

    email() {
        const email = this.props.user?.email;

        if (email) {
            return (<div>Email me at {email}</div>)
        };
    }

    work() {
        const work = this.props.user?.work;

        if (work) {
            return (<div>Works at {work}</div>)
        };
    }

    city() {
        const city = this.props.user?.city;
        if (city) {
            return (<div>Lives in {this.props.user.city}</div>)
        };
    }

    education() {
        const education = this.props.user?.education;

        if (education) {
            return (<div>Studied at {education}</div>)
        };
    }

    portfolio() {
        const portfolio = this.props.user?.portfolio;

        if (portfolio) {
            return (<div>Here's my portfolio website {portfolio}</div>)
        };
    }

    render() {
        const {user, updateUser} = this.props;
        return (
            <div>
                <h1>Intro</h1>
                <Bio user={user} updateUser={updateUser}/>
                {this.city()}
                {this.work()}
                {this.education()}
                {this.email()}
                {this.portfolio()}
                <button onClick={() => this.props.openModal("edit_profile", user.id)}>Edit Profile</button>
            </div>
        );
    };
};


export default Intro;