import React from "react";
import { createPost } from "../../utils/post_api_util";
import Dropdown from "../nav_bar/dropdown";
import { BsThreeDots} from "react-icons/bs";
import CreateCommentContainer from "../comment/create_comment_container";
import CommentIndex from "../comment/comment_index";
import LikeContainer from "../like/like_container";
import LikeButton from "../like/like_button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TimeElapsed from "./post_time_elapsed";

// Post header

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props);
        // this.dropdown = false; 
        this.state = {
            dropdown: false,
            postLikedByCurrentUser: false,
            displayComments: true
        };

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.closeDropDown = this.closeDropDown.bind(this);

        this.openEditPostModal = this.openEditPostModal.bind(this);

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
        let commentCountText;
        if (commentLength > 1) {
            commentCountText = `${commentLength} Comments`
        } else if (commentLength > 0) {
            commentCountText = `${commentLength} Comment`
        }
        return (
            <div onClick={() => this.setState((prevProps) => {return {displayComments: !prevProps.displayComments}})}>
                {commentCountText}
            </div>
        );
    }

    comments() {
        if (this.state.displayComments) {
            return (
                <>
                    <div className="post-comments">
                        <CommentIndex commentsArr={this.props.post.comments} />
                    </div>

                    <div className="create-comment">
                        <CreateCommentContainer postId={this.props.post.id} />
                    </div>
                </>
            );
        } else {
            return null;
        }
    }


    render() {
        let postAuthor = this.capitalize(this.props.postUser.first_name) + " " + this.capitalize(this.props.postUser.last_name);
        let createdDate = this.processTime(this.props.post.created_at);
        let postImage = this.props.post.photoUrl ? <img className="post-photo" src={this.props.post.photoUrl} /> : null;
        return (


            <div className="post">
                <div className="post-header">
                    <Link to={`/users/${this.props.currentUser.id}`}>
                        <div className="image-container">
                            <img src={this.props.currentUser.profilePhoto} />
                        </div>
                    </Link>

                    <div className="post-header-middle">
                        <a className="post-author-name" href="#"> {postAuthor} </a>
                        <TimeElapsed  createdDate={this.props.post.created_at}/>
                    </div>


                    <button className="post-header-dropdown" onClick={this.toggleDropDown} onBlur={this.closeDropDown}>
                        <BsThreeDots color="#55575B" size={"20px"}/>
                        <div>
                            {this.dropDownItems()}
                        </div>
                    </button>
                </div>

                <div className="post-body">
                    {this.props.post.body.split('\r\n').map((line, index) => (
                    <div key={`${index}${line}`}>
                        {line}
                        <br />
                    </div>
                    ))}
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

                    <button onClick={() => this.setState({displayComments: true})}>
                        Comment
                    </button>
                </div>
                <div className="hr" />


                {this.comments()}

            </div>
        );

    }

    
};

export default PostIndexItem;



