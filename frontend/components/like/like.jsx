import React from "react";

class Like extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.likes.currentUser) {
            this.props.likePostButton(this.props.likes.currentUser);
        }
    }

    likeDisplay() {
        const likesLength = Object.keys(this.props.likes).length;
        const currentUserLike = this.props.likes.currentUser;
        let likeText;
        if (currentUserLike) {
            if (likesLength > 2) {
                likeText = `You and ${likesLength - 1} others`;
            } else if (likesLength == 2) {
                likeText = `You and ${likesLength - 1} other`;
            } else {
                likeText = `You`;
            }
        } else {
            if (likesLength > 0) {
                likeText =  `${likesLength}`;
            } else {
                return null;
            }
        }
        return (
            <div onClick={() => this.props.openModal("like_index", this.props.postId)}>
                {likeText}
            </div>
        );
    }

    render() {
        return (
            this.likeDisplay()
        );
    }
}

export default Like;