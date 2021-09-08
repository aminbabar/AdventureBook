import React from "react";

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
        // debugger;

        return(
            <nav>
                <div className="left">

                </div>

                <div className="middle">

                </div>


                <div className="right">
                    <span>
                        {this.props.currentUser.fname}
                    </span>
                    {logoutButton}
                </div>
            </nav>
        );
    };
};

export default NavBar;