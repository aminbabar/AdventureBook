import React from "react";

class Signup extends React.Component {

    constructor() {
        super(props);
        this.state = {
            email: "",
            fname: "",
            lname: "",
            password: "",
            city: "",
            work: ""
        };
    };

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.Signup(this.state)
        .then( () => this.props.history.push("/feed"));
    }


    render() {
        return (
            <h1>Sign up form</h1>
        )
    };
};

export default Signup;