import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { GoArrowLeft } from "react-icons/go";
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
    }

    focusSearch() {
        this.setState({searchClickedOn: true})
    }

    unFocusSearch() {
        this.setState({ searchClickedOn: false })
    }


    loadGoogleAnalytics() {
        if (!document.getElementById("google-analytics")) {
            const script = document.createElement("script");
            script.id = "google-analytics";
            script.async = true;
            script.src = "https://www.googletagmanager.com/gtag/js?id=G-WKHT1LM5SS";
            document.head.appendChild(script);

            script.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    window.dataLayer.push(arguments);
                }
                window.gtag = gtag;
                gtag("js", new Date());
                gtag("config", "G-WKHT1LM5SS");
            };
        }
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.loadGoogleAnalytics();
        }
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
                    <Link to="/">
                        <div>
                            <IoMdHome className="home-icon icon"/>
                        </div>
                    </Link>

                    <a href="https://github.com/aminbabar" target="_blank">
                        <div>
                            <FaGithub className="icon"/>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/arbabar/" target="_blank">
                        <div>
                            <FaLinkedin className="icon"/>
                        </div>
                    </a>
                </div>
                

                <div className="right">
                    <Link className="user-name-container" to={`/users/${this.props.currentUser.id}`}>
                        <div className="image-container">
                            <img src={this.props.currentUser.profilePhoto} />
                        </div>
                    </Link>

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