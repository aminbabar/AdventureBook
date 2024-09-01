import React from 'react';

class CommentTimeElapsed extends React.Component {
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

        const commentDate = new Date(time);
        const currentDate = new Date();
        const timeDiff = currentDate - commentDate;

        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const years = Math.floor(days / 365); // Approximate, as years can have leap years

        if (years > 0) {
            return `${years}y`;
        } else if (weeks > 0) {
            return `${weeks}w`;
        } else if (days > 0) {
            return `${days}d`;
        } else if (hours > 0) {
            return `${hours}h`;
        } else {
            return `${minutes}m`;
        }
    }




    render() {
        return <span className="comment-date">{this.state.timeString}</span>;
    }
}

export default CommentTimeElapsed;