import React from "react";
import Bio from "./bio";
class Intro extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const {user, updateUser} = this.props;
        return (
            <div>
                <h1>Intro</h1>
                <Bio user={user} updateUser={updateUser}/>
                inside of intro.jsx
            </div>
        );
    };
};


export default Intro;