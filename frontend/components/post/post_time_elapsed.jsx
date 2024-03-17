import React from 'react';

class TimeElapsed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timeString: this.getTimeString(props.createdDate)
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            10000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            timeString: this.getTimeString(this.props.createdDate)
        });
    }

    getTimeString(time) {
        const postDate = new Date(time);
        const currentDate = new Date().getTime();

        const timeDiff = currentDate - postDate;
        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);


        if (days >= 7) {
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            return postDate.toLocaleDateString('en-US', options);
        } else if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return 'Just now';
        }
    }


    render() {
        return <span className="post-date">{this.state.timeString}</span>;
    }
}

export default TimeElapsed;