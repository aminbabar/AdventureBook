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
        
        this.currentDate = new Date();
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

    generateDays() {
        const days = [];
        for (let i = 1; i <= 31; i++ ) {
                days.push(
                    <option key={`${i}days`}>
                        {i}
                    </option>
                );
        };
        return (
            <select name="day" defaultValue={this.currentDate.getDay()}>
                {days}
            </select>
        );
    }

    generateYears() {
        const years = [];
        const currYear = parseInt(this.currentDate.getYear()) + 1900;
        for (let i = currYear; i >= 1905; i--) {
            years.push(
                <option key={`${i}years`}>
                    {i}
                </option>);
        };
        return (
            <select name="year" defaultValue={currYear}>
                {years}
            </select>
        );
    }

    generateMonths() {
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        const monthOptions = [];
        for (let i = 0; i < monthNames.length; i++) {
            monthOptions.push(
                <option key={`${i}months`}>
                    {monthNames[i]}
                </option>);
        };

        return (
            <select name="months" defaultValue={monthNames[this.currentDate.getMonth()]}>
                {monthOptions}
            </select>
        );
    }


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

                    <div className="birthday">Birthday</div>
                    <div className="birthday-selectors">
                        {this.generateMonths()}
                        <FiChevronDown className="select-arrow" />

                        {this.generateDays()}
                        <FiChevronDown className="select-arrow" />

                        {this.generateYears()}
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
                        <p>People who use our service may have uploaded your 
                            contact information to Algobook.
                        </p>
                    </div>

                    <div className="bottom-text">
                        <p>By clicking Sign Up, you agree that this is a clone 
                            of Facebook. You may end up really liking this 
                            project, but you can always logout.
                        </p>
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