
import React from "react";
import { Link } from "react-router-dom";


class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
        this.openSignupModal = this.openSignupModal.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push("./"));
    };


    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        };
    };

    openSignupModal(e) {
        e.preventDefault();
        this.props.openModal("create_user");
    };

    componentWillUnmount() {
        this.props.resetErrors();
    };

    loginDemo(username, password) {
        return (e) => {
            e.preventDefault();
            // note: this.setstate is asynchronous, so have to pass it a callback
            this.setState({
                email: `${username}`,
                password: `${password}`
            }, () => {
                this.props.login(this.state)
                // .then(() => this.props.history.push("./"));
            });
        }
    };


    render() {
        return (
            <div className="login-form-container">

                <div className="splash-logo-div">
                    <div className="splash-logo">
                        algobook
                    </div>

                    <div className="splash-text">
                        Connect with friends and the world around you on Algobook.
                    </div>
                </div>

                <form className="login-form">
                    <ul>
                        {this.props.errors.map((error, i) => {
                            return (<li key={`error-${i}`}>{error}</li>)
                        })}
                    </ul>

                    <div className="text-password">
                        <label>
                            <input 
                                type="text"
                                value={this.state.email}
                                placeholder="Email or phone number"
                                onChange={this.handleInput("email")}
                            />
                        </label>


                        <label>
                            <input
                                type="password"
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.handleInput("password")}
                            />
                        </label>
                    </div>

                    <div className="login-button-div">
                        <button
                            className="login-button" 
                            onClick={this.handleSubmit}>
                                Log In
                        </button>
                    </div>
                    
                    <div className="demo-login-div">
                        <button
                            className="demo-login-button"
                            onClick={this.loginDemo("demouser@gmail.com", "123456")}>
                            Demo Log In 1
                        </button>
                    </div>

                    <div className="demo-login-div">
                        <button
                            className="demo-login-button"
                            onClick={this.loginDemo("demouser2@gmail.com", "123456")}>
                            Demo Log In 2
                        </button>
                    </div>

                    <div className="grey-line">
                    </div>


                    <div className="signup-link-div">
                        {/* <Link className="signup-link" to={"/signup"}>Create New Account</Link> */}
                        <button 
                            className="signup-link"
                            onClick={this.openSignupModal}>
                            Create new account
                        </button>
                    </div>


                </form>
            </div>
        );
    };
};

export default LoginForm;