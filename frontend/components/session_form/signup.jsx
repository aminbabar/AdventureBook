import React from "react";
import { FiChevronDown } from 'react-icons/fi';
import { MdError } from "react-icons/md";
import { ImCross } from "react-icons/im";

class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.currentDate = new Date();
        this.state = {
            email: "",
            reEnterEmail: "",
            firstName: "",
            lastName: "",
            password: "",
            day: `${this.currentDate.getDate()}`,
            month: `${this.currentDate.getMonth() + 1}`,
            year: `${this.currentDate.getYear() + 1900}`,
            gender: "",
            firstNameClass: "first-name",
            lastNameClass: "last-name",
            mobileOrEmailClass: "mobile-or-email",
            passwordClass: "password",
            birthdaySelectorClass: "birthday-selectors",
            genderClass: "gender",
            reEnterEmailClass: "re-enter-email-hidden"
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateFirstName = this.validateFirstName.bind(this);
        this.validateLastName = this.validateLastName.bind(this);
        this.validateMobileOrEmail = this.validateMobileOrEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.focusState = this.focusState.bind(this);
        this.validateBirthday = this.validateBirthday.bind(this);
        this.validateGender = this.validateGender.bind(this);
        this.validateReEnterEmail = this.validateReEnterEmail.bind(this);
        this.generateInputBoxWithErrorHandling = this.generateInputBoxWithErrorHandling.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);

        this.emailRef = React.createRef();
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.birthdayRef = React.createRef();
        this.genderRef = React.createRef();
        this.reEnterEmailRef = React.createRef();

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

        // run all validations
        if (this.validateFirstName() && this.validateLastName() && 
            this.validateMobileOrEmail() && this.validateReEnterEmail() 
            && this.validatePassword() && this.validateBirthday() 
            && this.validateGender()) {
            const user = {
                email: this.state.email,
                first_name: this.state.firstName.charAt(0).toUpperCase() + this.state.firstName.slice(1).toLowerCase(),
                last_name: this.state.lastName.charAt(0).toUpperCase() + this.state.lastName.slice(1).toLowerCase(),
                password: this.state.password,
                gender: this.state.gender,
                birthday: `${this.state.year}-${this.state.month}-${this.state.day}`
            }
            this.props.signup(user).then(
                () => this.props.closeModal(),
                // (err) => {debugger}
            );

        }

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
            <select ref={this.birthdayRef} name="day" defaultValue={this.currentDate.getDate()} onChange={this.handleInput("day")}>
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
        if (this.state.firstName.length === 0) {
            this.setState({firstNameClass: "first-name error"});
        } else {
            this.setState({ firstNameClass: "first-name" });
            return true;
        };
    }

    validateLastName(e) {
        if (this.state.lastName.length === 0) {
            this.setState({ lastNameClass: "last-name error" });
        } else {
            this.setState({ lastNameClass: "last-name" });
            return true;
        };
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value }, () => {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email)) {
                this.setState({ reEnterEmailClass: "re-enter-email" });
                return true;
            } else {
                this.setState({ reEnterEmailClass: "re-enter-email-hidden" })
            }
        });
    }

    validateReEnterEmail(e) {
        if (this.state.reEnterEmailClass.includes("hidden")) {
            return true;
        }

        if (this.state.reEnterEmail !== this.state.email) {
            this.setState({ reEnterEmailClass: "re-enter-email error" });
        } else {
            this.setState({ reEnterEmailClass: "re-enter-email" });
            return true;
        };
    }

    validateMobileOrEmail(e) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email)) {
            let numberCheck = this.state.email;
            const usPhoneNumberRegex = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
            if (usPhoneNumberRegex.test(numberCheck)) {
                this.setState({ mobileOrEmailClass: "mobile-or-email" });
                return true;
            } else {
                this.setState({ mobileOrEmailClass: "mobile-or-email error" });
            }
        } else {
            this.setState({ mobileOrEmailClass: "mobile-or-email" });
            return true;
        }
    };

    validatePassword(e) {
        if (this.state.password.length < 6) {
            this.setState({ passwordClass: "password error" });
        } else {
            this.setState({ passwordClass: "password" });
            return true;
        };
    }

    validateBirthday(e) {
        const currDate = new Date();
        // this.state.month - 1 because months go from 0 - 11
        const userBirthdayInput = new Date(this.state.year, this.state.month - 1, this.state.day);

        // const currYear = parseInt(this.currentDate.getYear()) + 1900;
        // the user needs to be at least 5 years old
        const numDaysInFiveYears = 365 * 5;
        const numMillisecondsInDay = 1000 * 3600 * 24;
        if (((currDate - userBirthdayInput) / numMillisecondsInDay) < numDaysInFiveYears) {
            this.setState({ birthdaySelectorClass: "birthday-selectors error" });
        } else {
            this.setState({ birthdaySelectorClass: "birthday-selectors" });
            return true;
        }
    }


    validateGender() {
        if (this.state.gender.length === 0) {
            this.setState({ genderClass: "gender error" });
        } else {
            this.setState({ genderClass: "gender" });
            return true;
        };
    }


    focusState(e, className) {
        e.stopPropagation();
        if (this.state[className].includes("error")) {
            this.setState({ [className]: this.state[className].replace("error", "tool-tip")})
        }
    }

    // sample return for following method
    /* <div className="input-container" onBlur={this.validateFirstName} onFocus={(e) => this.focusState(e, 'firstNameClass')}>

            <input
                ref={this.firstNameRef}
                type="text"
                value={this.state.firstName}
                onChange={this.handleInput("firstName")}
                placeholder="First name"
                className={this.state.firstNameClass}
                autoFocus
                
            />

            {this.state.firstNameClass.includes("error") &&
                <MdError className="error-logo" onClick={() => this.firstNameRef.current.focus()}/>}

            {this.state.firstNameClass.includes("tool-tip") && 
                
                    <div className="info-field-arrow-right">
                        What's your name?

                        <div className="arrow-right"></div>
                    </div>
            }


    </div> */
    generateInputBoxWithErrorHandling(validationMethod, classNameForInput, stateVariableNameForInput, refNameForInput, placeholderText, errorMessage, arrowDirection, handleEmailChange=false, inputType="text") {
        let inputContainerClass = "";

        if (classNameForInput === 'reEnterEmailClass') {
            inputContainerClass = ` ${this.state[classNameForInput]}`;
        }

        return (
            <div className={`input-container${inputContainerClass}`} onBlur={validationMethod} onFocus={(e) => this.focusState(e, classNameForInput)}>

                <input
                    ref={refNameForInput}
                    type={`${inputType}`}
                    value={this.state[stateVariableNameForInput]}
                    onChange={handleEmailChange || this.handleInput(stateVariableNameForInput)}
                    placeholder={placeholderText}
                    className={this.state[classNameForInput]}
                    autoFocus={stateVariableNameForInput === 'firstName'}
                />

                {this.state[classNameForInput].includes("error") &&
                    <MdError className="error-logo" onClick={() => refNameForInput.current.focus()} />}

                {this.state[classNameForInput].includes("tool-tip") &&

                    <div className={`info-field-${arrowDirection}`}>
                        {errorMessage}

                        <div className={arrowDirection}></div>
                    </div>
                }
            </div>
        )
    }


    render() {
        return (
            <div className="signup-form">
                <div className="signup-form-head">
                    <h2>Sign Up</h2>
                    <h4>It's quick and easy.</h4>

                    <ImCross className="cross" onClick={() => this.props.closeModal()}/>
                </div>

                <div className="signup-line"></div>

                <form className="form-body">
                    
                    {this.props.errors.map((error, i) => {
                        return (<div className="errors" key={`error-${i}`}>{error}</div>)
                    })}

                    <div className="last-name-first-name-container">
                        {this.generateInputBoxWithErrorHandling(this.validateFirstName,
                                                                'firstNameClass',
                                                                'firstName',
                                                                this.firstNameRef,
                                                                "First Name",
                                                                "What's your name?",
                                                                "arrow-right")}

                        {this.generateInputBoxWithErrorHandling(this.validateLastName,
                                                                'lastNameClass',
                                                                'lastName',
                                                                this.lastNameRef,
                                                                "Last Name",
                                                                "What's your name?",
                                                                "arrow-up")}
                    </div>

                    {this.generateInputBoxWithErrorHandling(this.validateMobileOrEmail,
                                                            'mobileOrEmailClass',                                                            'email',
                                                            this.emailRef,
                                                            "Mobile number or email",
                                                            "You'll use this when you log in and if you ever need to reset your password.",
                                                            "arrow-right",
                                                            this.handleEmailChange)}


                    {this.generateInputBoxWithErrorHandling(this.validateReEnterEmail, 
                                                            'reEnterEmailClass', 
                                                            'reEnterEmail', 
                                                            this.reEnterEmailRef, 
                                                            "Re-enter email", 
                                                            "Your emails do not match. Please try again.", 
                                                            "arrow-right")}
                    
                    
                    {this.generateInputBoxWithErrorHandling(this.validatePassword, 
                                                            'passwordClass',
                                                            'password',
                                                            this.passwordRef,
                                                            "New password",
                                                            "Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).", "arrow-right", 
                                                            false,
                                                            "password")}


                    <div className="birthday">
                        Birthday

                        {this.state.birthdaySelectorClass.includes("error") &&
                            <MdError className="error-logo" onClick={() => this.birthdayRef.current.focus()}/>}
                    </div>


                    <div className={this.state.birthdaySelectorClass} onBlur={this.validateBirthday} onFocus={(e) => this.focusState(e, 'birthdaySelectorClass')}>

                        {this.state.birthdaySelectorClass.includes("tool-tip") &&

                            <div className="info-field-arrow-right">
                                It looks like you entered the wrong info. Please be sure to use your real birthday.

                                <div className="arrow-right"></div>
                            </div>
                        }

                        {this.generateMonths()}
                        <FiChevronDown className="select-arrow" />

                        {this.generateDays()}
                        <FiChevronDown className="select-arrow" />

                        {this.generateYears()}
                        <FiChevronDown className="select-arrow" />
                    </div>


                    <div className={this.state.genderClass}>
                        Gender
                        
                        {this.state.genderClass.includes("error") &&
                            <MdError className="error-logo" onClick={() => this.genderRef.current.focus()} />}
                    </div>

                    <div className="radio-buttons-container" onChange={this.handleInput("gender")} onFocus={(e) => this.focusState(e, 'genderClass')} onBlur={this.validateGender}>

                        {this.state.genderClass.includes("tool-tip") &&
                            <div className="info-field-arrow-right">
                                Please choose a gender. You can change who can see this later.
                                <div className="arrow-right"></div>
                            </div>
                        }

                        <label>
                            Female
                            <input ref={this.genderRef} type="radio" name="gender" value="Female" />
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