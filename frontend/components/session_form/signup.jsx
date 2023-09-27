import React from "react";
import { FiChevronDown } from 'react-icons/fi';
import { MdError } from "react-icons/md";


class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.currentDate = new Date();
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            day: `${this.currentDate.getDay()}`,
            month: `${this.currentDate.getMonth() + 1}`,
            year: `${this.currentDate.getYear() + 1900}`,
            gender: "",
            firstNameClass: "first-name",
            lastNameClass: "last-name"
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateFirstName = this.validateFirstName.bind(this);
        this.validateLastName = this.validateLastName.bind(this);
        this.focusState = this.focusState.bind(this);
    };

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        };
    };

    componentWillUnmount() {
        this.props.resetErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            password: this.state.password,
            gender: this.state.gender,
            birthday: `${this.state.year}-${this.state.month}-${this.state.day}`
        }
        this.props.signup(user).then(
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
            <select name="day" defaultValue={this.currentDate.getDay()} onChange={this.handleInput("day")}>
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
            <select name="year" defaultValue={currYear} onChange={this.handleInput("year")}>
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
                <option key={`${i}months`} value={`${i + 1}`}>
                    {monthNames[i]}
                </option>);
        };

        return (
            <select name="months" defaultValue={this.currentDate.getMonth() + 1} onChange={this.handleInput("month")}>
                {monthOptions}
            </select>
        );
    }

    validateFirstName(e) {
        e.stopPropagation();
        if (this.state.firstName.length === 0) {
            this.setState({firstNameClass: "first-name error"});
        } else {
            this.setState({ firstNameClass: "first-name" });
        };
    }

    validateLastName(e) {
        e.stopPropagation();
        if (this.state.lastName.length === 0) {
            this.setState({ lastNameClass: "last-name error" });
        } else {
            this.setState({ lastNameClass: "last-name" });
        };
    }

    focusState(e, className) {
        e.stopPropagation();
        if (this.state[className].includes("error")) {
            this.setState({ [className]: this.state[className].replace("error", "tool-tip")})
        }
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
                        
                        <div className="input-container" onBlur={this.validateFirstName} onFocus={(e) => this.focusState(e, 'firstNameClass')}>

                                <input 
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={this.handleInput("firstName")}
                                    placeholder="First name"
                                    className={this.state.firstNameClass}
                                    autoFocus
                                    
                                />

                                {this.state.firstNameClass.includes("error") &&
                                    <MdError className="error-logo" />}

                                {this.state.firstNameClass.includes("tool-tip") && 
                                    
                                        <div className="info-field">
                                            What's your name?

                                            <div className="arrow-right"></div>
                                        </div>
                                }


                        </div>


                        <div className={"input-container"} onBlur={this.validateLastName} onFocus={(e) => this.focusState(e, 'lastNameClass')}>
                                <input
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={this.handleInput("lastName")}
                                    placeholder="Last name"
                                    className={this.state.lastNameClass}
                                />

                            {this.state.lastNameClass.includes("error") &&
                                <MdError className="error-logo"/>}

                                {this.state.lastNameClass.includes("tool-tip") &&

                                    <div className="info-field">
                                        What's your name?

                                        <div className="arrow-up"></div>
                                    </div>
                                }

                        </div>

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
                            <input type="radio" name="gender" value="Female" />
                        </label>

                        <label>
                            Male
                            <input type="radio" name="gender" value="Male" />
                        </label>

                        <label>
                            Other
                            <input type="radio" name="gender" value="Other" />
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