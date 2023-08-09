import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from 'react-icons/fi';


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
            this.setState({[type]: e.target.value}, () => {console.log(this.state)})
        };
    };

    componentWillUnmount() {
        this.props.resetErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(
            () => this.props.closeModal(),
            (err) => null
        );
    };


    render() {
        return (
            <div className="signup-form">
                <div className="signup-form-head">
                    <ul>
                        {this.props.errors.map((error, i) => {
                            return (<li key={`error-${i}`}>{error}</li>)
                        })}
                    </ul>
                    <h2>Sign Up</h2>
                    <h4>It's quick and easy.</h4>

                </div>

                <div className="signup-line"></div>

                <form className="form-body">

                    <div className="last-name-first-name-container">
                            <input 
                                type="text"
                                value={this.state.fname}
                                onChange={this.handleInput("fname")}
                                placeholder="First name"
                                className="first-name"
                            />

                            <input
                                type="text"
                                value={this.state.lname}
                                onChange={this.handleInput("lname")}
                                placeholder="Last name"
                                className="last-name"
                            />

                    </div>

                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                            placeholder="Mobile number or email"
                            className="mobile"
                        />

                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                            placeholder="New password"
                            className="password"
                        />


                    {/* FIX MAKE THIS MORE DYNAMIC*/}
                    <div className="birthday">Birthday</div>
                    <div className="birthday-selectors">
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
                        <FiChevronDown className="select-arrow" />

                        <select name="day">
                            <option value="day">Day</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <FiChevronDown className="select-arrow" />

                        <select name="year">
                            <option value="year">Year</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                        </select>
                        <FiChevronDown className="select-arrow" />
                    </div>

                    
                    <div className="gender">Gender</div>
                    <div className="radio-buttons-container" onChange={this.handleInput("gender")}>
                        <label>
                            Female
                            <input type="radio" name="gender" value="female" />
                        </label>

                        <label>
                            Day
                            <input type="radio" name="gender" value="male" />
                        </label>

                        <label>
                            Other
                            <input type="radio" name="gender" value="other" />
                        </label>
                    </div>

                    <div className="bottom-text">
                        <p>People who use our service may have uploaded your contact information to Facebook.</p>
                    </div>

                    <div className="bottom-text">
                        <p>By clicking Sign Up, you agree that this is a clone of Facebook. You may end up really liking this project, but you can always logout at any time.</p>
                    </div>

                    <div className="signup">
                        <button onClick={this.handleSubmit}>Sign Up</button>
                    </div>

                </form>

            </div>
        )
    };
};

export default Signup;