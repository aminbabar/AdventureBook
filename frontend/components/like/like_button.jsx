import React from "react"
import { AiFillLike, AiOutlineLike} from "react-icons/ai";


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
            return <button onClick={this.toggleLike}> <AiFillLike className="like-logo-button clicked"/> Like </button>
        } else {
            return <button onClick={this.toggleLike}><AiOutlineLike className="like-logo-button" />Like</button>
        }
    }
    
    render() {
        return (this.likedOrUnliked());
    }
}

export default LikeButton;