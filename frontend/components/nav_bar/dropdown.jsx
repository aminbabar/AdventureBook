import React from "react";


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.changeState = this.changeState.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
    };

    changeState() {

        this.setState((prevState) => {
            return { show: !prevState.show }
        });
    };

    closeDropdown() {
        this.setState({show: false});
    };


    render() {
        let cName = this.state.show ? `dropdown-show-${this.props.myclass}` : `dropdown-hide-${this.props.myclass}`;
        return (
            <button className={`dropdown-container-${this.props.myclass}`} onClick={this.changeState} onBlur={this.closeDropdown}>
                <div className={`dropdown-container-icon-${this.props.myclass}`}> {this.props.icon}</div>
                
                {this.state.show ? <ul className={cName}>{this.props.children}</ul> : null}

            </button>
        );
    };
};

export default Dropdown;