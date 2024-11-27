import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaPersonSnowboarding } from "react-icons/fa6";

const MyLinks = () => {
    return (
        <div className="my-links-container">
            <div className="my-links-header">Links</div>
            <div className="my-links-body">
                <a href="https://github.com/aminbabar" target="_blank" className="my-link-item">
                    <div className="my-link-icon-container">
                        <FaGithub className="icon" />
                    </div>
                    <div className="my-link-text">Github</div>
                </a>
                <a href="https://www.linkedin.com/in/arbabar/" target="_blank" className="my-link-item">
                    <div className="my-link-icon-container">
                        <FaLinkedin className="icon" />
                    </div>
                    <div className="my-link-text">LinkedIn</div>
                </a>
                <a href="https://www.aminbabar.dev" target="_blank" className="my-link-item">
                    <div className="my-link-icon-container">
                        <FaPersonSnowboarding className="icon" />
                    </div>
                    <div className="my-link-text">Portfolio Site</div>
                </a>
            </div>
        </div>
    );
};

export default MyLinks;
