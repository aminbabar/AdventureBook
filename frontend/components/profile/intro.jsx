import React from "react";
import Bio from "./bio";
class Intro extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <h1>Intro</h1>
                <Bio />
                inside of intro.jsx
            </div>
        );
    };
};


export default Intro;