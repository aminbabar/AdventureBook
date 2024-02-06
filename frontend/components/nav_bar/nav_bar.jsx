import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
// import { IoMdNotifications} from "react-icons/io"
// import { CgMenuGridO} from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { GoArrowLeft } from "react-icons/go";
// import { FaFacebookMessenger } from "react-icons/fa";

import Dropdown from "./dropdown";
import Search from "../search/search";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchClickedOn: false
        }

        this.focusSearch = this.focusSearch.bind(this);
        this.unFocusSearch = this.unFocusSearch.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }



    // LEFT
    // facebook logo that takes you to home on click
    // search bar

    // MIDDLE
    // Home logo for newsfeed
    // friends logo
    // group logo


    // RIGHT
    // profile link
    // menu link
    // messenger
    // notificatinos
    // dropdown for logout, feedback, settings

    focusSearch() {
        // debugger;
        this.setState({searchClickedOn: true})
    }

    unFocusSearch() {
        this.setState({ searchClickedOn: false })
    }
    
    render() {

        const logoClassName = this.state.searchClickedOn ? "logo hide" : "logo";
        const arrowClassName = this.state.searchClickedOn ? "arrow" : "arrow hide";
        const leftClass = this.state.searchClickedOn ? "left focused" : "left"
        return(
            <nav className="navbar">
                <div className={leftClass}>
                    <div className={logoClassName}>
                        a
                    </div>

                    <GoArrowLeft className={arrowClassName}/>

                    <Search searchClickedOn={this.state.searchClickedOn} focusSearch={this.focusSearch} unFocusSearch={this.unFocusSearch}/>
                </div>

                <div className="middle">
                    <FaGithub />
                    <FaLinkedin />
                    
                </div>
                

                <div className="right">
                    <span>
                        {this.props.currentUser.first_name}
                    </span>

                    <Dropdown icon={<BsFillCaretDownFill size={"15px"} />} myclass="navbar">
                        <li onClick={this.props.logout}>
                            <GrLogout /> <span>Log out</span>
                        </li>
                    </ Dropdown>
                </div>
            </nav>
        );
    };
};

export default NavBar;