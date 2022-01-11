
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

    componentWillUnmount() {
        this.props.resetErrors();
    }


    render() {
        return (
            <div className="login-form-container">

                <div>
                    {/* <img src="https://lh3.googleusercontent.com/proxy/HtU0a_h_wjaViEyAiiCU3ivY2-ullrROdSDpRlfACis1w3ds0ntElc7oj7NXhlh3cjLIg03ymIi2AaX7Kh0VjgHzUinANqwkOeD0UvCE-eZwo8JEq1TjJus3n9SJUXHG0vFptjuZuIR7Iqz7SUm3LErP" alt="image tag" /> */}
                    Connect with friends and the world around you on AlgoBook
                </div>
                <form className="login-form">
                    <ul>
                        {this.props.errors.map((error, i) => {
                            return (<li key={`error-${i}`}>{error}</li>)
                        })}
                    </ul>
                    <label>
                        <input 
                            type="text"
                            value={this.state.email}
                            placeholder="Email or Phone Number"
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

                    <button 
                        className="login-button" 
                        onClick={this.handleSubmit}>
                            Log In
                    </button>
                    <Link className="signup-link" to={"/signup"}>Create New Account</Link>
                </form>
            </div>
        );
    };
};

export default LoginForm;