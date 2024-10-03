import React from "react";
import Bio from "./bio";
import { FaGraduationCap } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsPersonArmsUp } from "react-icons/bs";

class Intro extends React.Component {
    constructor(props) {
        super(props);
    };

    email() {
        const email = this.props.user?.email;

        if (email) {
            return (<div className="profile-intro-detail"> 
                        <MdEmail className="profile-intro-logo"/> 
                        <span>  Email me at </span> 
                        <span> {email} </span>
                    </div>)
        };
    }

    work() {
        const work = this.props.user?.work;

        if (work) {
            return (<div className="profile-intro-detail"> 
                <FaBriefcase className="profile-intro-logo" /> 
                <span>Works at</span> 
                <span>{work}</span>
            </div>)
        };
    }

    city() {
        const city = this.props.user?.city;
        if (city) {
            return (<div className="profile-intro-detail"> 
                <IoHomeSharp className="profile-intro-logo" /> 
                <span>Lives in</span> 
                <span>{this.props.user.city}</span>
            </div>)
        };
    }

    education() {
        const education = this.props.user?.education;

        if (education) {
            return (<div className="profile-intro-detail"> 
                <FaGraduationCap className="profile-intro-logo" />
                <span>Studied at</span> 
                <span>{education}</span>
            </div>)
            };
    }

    portfolio() {
        const portfolio = this.props.user?.portfolio;

        if (portfolio) {
            return (<div className="profile-intro-detail"> <BsPersonArmsUp className="profile-intro-logo" /> 
            <span>Portfolio site</span> 
            <span> <a href="https://www.aminbabar.com">{portfolio}</a></span>
            </div>)
        };
    }

    render() {
        const {user, updateUser, currentUserId} = this.props;
        const currentUser = currentUserId === user?.id;
        return (
            <div className="profile-intro">
                <div className="profile-header">Intro</div>
                <Bio user={user} updateUser={updateUser} currentUserId={currentUserId}/>
                {this.city()}
                {this.work()}
                {this.education()}
                {this.email()}
                {this.portfolio()}
                {currentUser && 
                    <div className="edit-details" onClick={() => this.props.openModal("edit_profile", user.id)}>
                        Edit Details
                    </div>}
            </div>
        );
    };
};


export default Intro;