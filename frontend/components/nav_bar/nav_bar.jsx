import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
// import { IoMdNotifications} from "react-icons/io"
// import { CgMenuGridO} from "react-icons/cg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { GoArrowLeft } from "react-icons/go";
// import { FaFacebookMessenger } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

import Dropdown from "./dropdown";
import Search from "../search/search";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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

    focusSearch() {
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
                    <Link to="/">
                        <div className={logoClassName}>
                            a
                        </div>
                    </Link>

                    <GoArrowLeft className={arrowClassName}/>

                    <Search searchClickedOn={this.state.searchClickedOn} focusSearch={this.focusSearch} unFocusSearch={this.unFocusSearch}/>
                </div>

                <div className="middle">
                    <div>
                        <Link to="/">
                            <IoMdHome className="home-icon icon"/>
                        </Link>
                    </div>

                    <div>
                        <a href="https://github.com/aminbabar" target="_blank">
                                <FaGithub className="icon"/>
                        </a>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/in/arbabar/" target="_blank">
                            <FaLinkedin className="icon"/>
                        </a>
                    </div>
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