import React from "react";


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.changeState = this.changeState.bind(this);
        // this.closeDropdown = this.closeDropdown.bind(this);
    };

    changeState() {
        // let newState = !this.state.show;
        // this.setState({show: newState});

        this.setState((prevState) => {
            return { show: !prevState.show }
        });
    };

    // closeDropdown() {
    //     this.setState((prevState) => {
    //         return {show: !prevState.show}
    //     });
    //     // this.setState({show: false});
    // };


    render() {
        let cName = this.state.show ? "dropdown-show" : "dropdown-hide";
        return (
            <button className="dropdown-container" onClick={this.changeState} onBlur={this.changeState}>
                <div className="dropdown-container-icon"> {this.props.icon}</div>
                
                <ul className={cName} onClick={e => e.stopPropagation()}>
                    {this.props.children}
                </ul>
            </button>
        );
    };
};

export default Dropdown;