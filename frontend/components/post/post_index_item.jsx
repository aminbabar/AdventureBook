import React from "react";
import { createPost } from "../../utils/post_api_util";
import Dropdown from "../nav_bar/dropdown";
import { BsThreeDots} from "react-icons/bs";
import CreateCommentContainer from "../comment/create_comment_container";
import CommentIndexContainer from "../comment/comment_index_container";
import LikeContainer from "../like/like_container";
import LikeButton from "../like/like_button";

// Post header

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props);
        // this.dropdown = false; 
        this.state = {dropdown: false};
        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);

        this.openEditPostModal = this.openEditPostModal.bind(this);
        this.postLikedByCurrentUser = false;

        this.likePostButton = this.likePostButton.bind(this);
        this.unlikePostButton = this.unlikePostButton.bind(this);
    };


    likePostButton(like) {
        this.setState({postLikedByCurrentUser: like});
    }

    unlikePostButton() {
        this.setState({ postLikedByCurrentUser: false });
    }


    capitalize(word) {
        if (word) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        };
    };


    processTime(date) {
        // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let createdAt = new Date(date);
        let currDate = new Date(date);

        return createdAt.toDateString();

    };

    openEditPostModal() {
        this.props.openModal("edit_post", this.props.post.id)
    };

    dropDownItems() {
        let className = this.state.dropdown ? "show-post-header-dropdown" : "hide-post-header-dropdown";
        if (this.props.currentUser.id ===  this.props.post.author_id) {
            return (
                <div className={className}>
                    <ul>
                        <li onClick={this.openEditPostModal}>Edit</li>
                        <li onClick={() => this.props.deletePost(this.props.post.id)}>Delete</li>
                    </ul>
                </div>
            );
        } else {
            return(
                <div className={className}>
                    <ul>
                        <li>Save Post</li>
                        <li>Hide Post</li>
                    </ul>
                </div>
            )
        };
    };


    toggleDropDown() {
        let newState = this.state.dropdown;
        this.setState({dropdown: !newState});
    };

    closeDropDown() {
        this.setState({ dropdown: false });
    };

    commentCount() {
        const commentLength = this.props.post.comments.length;
        if (commentLength > 1) {
            return <div>{commentLength} Comments</div>
        } else if (commentLength > 0) {
            return <div>{commentLength} Comment</div>
        }
    }


    render() {
        let postAuthor = this.capitalize(this.props.postUser.fname) + " " + this.capitalize(this.props.postUser.lname);
        let createdDate = this.processTime(this.props.post.created_at);
        let postImage = this.props.post.photoUrl ? <img className="post-photo" src={this.props.post.photoUrl} /> : null;
        return (


            <div className="post">
                <div className="post-header">
                    <div className="post-header-photo">
                    </div>

                    <div className="post-header-middle">
                        <a className="post-author-name" href="#"> {postAuthor} </a>
                        <a className="post-date" href="#"> {createdDate}</a>
                    </div>

                    <button className="post-header-dropdown" onClick={this.toggleDropDown} onBlur={this.closeDropDown}>
                        <BsThreeDots color="#55575B" size={"20px"}/>
                        <div>
                            {this.dropDownItems()}
                        </div>
                    </button>
                </div>

                <div className="post-body">
                    {this.props.post.body}
                </div>

                <div>
                    {postImage}
                </div>

                <div className="post-likes-comments-count">
                    <LikeContainer 
                        likesArr={this.props.post.likes} 
                        likePostButton={this.likePostButton} 
                        openModal={this.props.openModal}
                        postId={this.props.post.id}
                    />

                    {this.commentCount()}
                </div>



                <div className="hr" />
                <div className="post-buttons">
                    <LikeButton 
                        postLikedByCurrentUser={this.state.postLikedByCurrentUser}
                        createLike={this.props.createLike}
                        deleteLike={this.props.deleteLike}
                        likePostButton={this.likePostButton}
                        unlikePostButton={this.unlikePostButton}
                        postId={this.props.post.id}
                    />
                    <button>Comment</button>
                </div>
                <div className="hr" />



                <div className="post-comments">
                    <CommentIndexContainer commentsArr={this.props.post.comments}/>
                </div>

                <div className="create-comment">
                    <CreateCommentContainer postId={this.props.post.id}/>
                </div>
            </div>
        );

    }

    
};

export default PostIndexItem;



