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
        let newState = !this.state.show;
        this.setState({show: newState});
    };

    closeDropdown() {
        this.setState({show: false});
    };


    render() {
        let cName = this.state.show ? "dropdown-show" : "dropdown-hide";
        return (
            <button className="dropdown-container" onClick={this.changeState} onBlur={this.closeDropdown}>
                {this.props.icon}
                <ul className={cName} onClick={e => e.stopPropagation()}>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ul>
            </button>
        );
    };
};

export default Dropdown;