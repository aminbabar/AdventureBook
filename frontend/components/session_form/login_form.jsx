
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
            .then(() => this.props.history.push("./feed"));
    };


    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        };
    };


    render() {
        return (
            <div>
                <form>
                    <label>
                        <input 
                            type="text"
                            value={this.state.email}
                            placeholder="Email or Phone Number"
                            onChange={this.handleInput("email")}
                        />
                    </label>

                    <br />

                    <label>
                        <input
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleInput("password")}
                        />
                    </label>

                    <button onClick={this.handleSubmit}>Log In</button>
                    <Link to={"/signup"}>Create New Account</Link>
                </form>
            </div>
        );
    };
};

export default LoginForm;