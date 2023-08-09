import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { IoMdNotifications} from "react-icons/io"
import { CgMenuGridO} from "react-icons/cg";
import { GrLogout } from "react-icons/gr";

import { FaFacebookMessenger } from "react-icons/fa";
import Dropdown from "./dropdown";
import Search from "../search/search";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
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
    
    render() {


        const logoutButton = this.props.currentUser ? (
            <button onClick={this.props.logout}>Logout</button>
        ) : (<p> Not signed in</p>);

        return(
            <nav>
                <div className="left">
                    <Search />
                </div>

                <div className="middle">

                </div>
                

                <div className="right">
                    <span>
                        {this.props.currentUser.first_name}
                    </span>

                    
                    <Dropdown icon={<CgMenuGridO size={"25px"} />} myclass="navbar"/>
                
                    <Dropdown icon={<FaFacebookMessenger size={"20px"} />} myclass="navbar"/>
                    <Dropdown icon={<IoMdNotifications size={"20px"} />} myclass="navbar"/>
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