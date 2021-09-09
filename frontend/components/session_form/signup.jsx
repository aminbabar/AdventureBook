import React from "react";
import { Link } from "react-router-dom";


class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            fname: "",
            lname: "",
            password: "",
            city: "",
            work: ""
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value});
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    };


    render() {
        return (
            <div className="signup-form">
                <ul>
                    {this.props.errors.map((error, i) => {
                        return (<li key={`error-${i}`}>{error}</li>)
                    })}
                </ul>
                <h2>Create a New Account</h2>
                <h4>It's quick and easy.</h4>
                <hr />

                <form>
                    <label>
                        <input 
                            type="text"
                            value={this.state.fname}
                            onChange={this.handleInput("fname")}
                            placeholder="First name"
                        />
                    </label>

                    <label>
                        <input
                            type="text"
                            value={this.state.lname}
                            onChange={this.handleInput("lname")}
                            placeholder="Last name"
                        />
                    </label>

                    <br />

                    <label>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                            placeholder="Mobile number or email"
                        />
                    </label>

                    <br />


                    <label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                            placeholder="New password"
                        />
                    </label>

                    <br />

                    {/* FIX MAKE THIS MORE DYNAMIC*/}
                    <label>Birthday
                        <select name="months">
                            <option>Month</option>
                            <option value="1">January</option>
                            <option value="2">February</option>
                            <option value="3">March</option>
                            <option value="4">April</option>
                            <option value="5">May</option>
                            <option value="6">June</option>
                            <option value="7">July</option>
                            <option value="8">August</option>
                            <option value="9">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>

                        <select name="day">
                            <option value="day">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>


                        <select name="year">
                            <option value="year">Year</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                    </label>

                    <br />

                    <label>Gender
                        <span>
                            <label>female</label>
                            <input type="radio" name="gender" value="female" checked onChange={this.handleInput("gender")}/>
                        </span>

                        <span>
                            <label>male</label>
                            <input type="radio" name="gender" value="male" onChange={this.handleInput("gender")}/>
                        </span>

                        <span>
                            <label>other</label>
                            <input type="radio" name="gender" value="other" onChange={this.handleInput("gender")}/>
                        </span>
                    </label>
                    <br />

                    <button onClick={this.handleSubmit}>Sign Up</button>

                    <Link to={"/login"}>Already have an account?</Link>

                </form>

            </div>
        )
    };
};

export default Signup;