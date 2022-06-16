import React from "react"

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.toggleLike = this.toggleLike.bind(this);
        // this.likedOrUnliked = this.likedOrUnliked.bind(this);
    }

    toggleLike(e) {
        const like = {likeable_type: "Post", likeable_id: this.props.postId}
        e.preventDefault();
        if (this.props.postLikedByCurrentUser) {
            this.props.deleteLike(this.props.postLikedByCurrentUser.id)
                .then(() => this.props.unlikePostButton());
        } else {
            this.props.createLike(like)
                .then((likeAction) => this.props.likePostButton(likeAction.like))
        };
    }

    likedOrUnliked() {
        if (this.props.postLikedByCurrentUser) {
            return <button onClick={this.toggleLike}>Unlike</button>
        } else {
            return <button onClick={this.toggleLike}>Like</button>
        }
    }

    render() {
        return (this.likedOrUnliked());
    }
}

export default LikeButton;