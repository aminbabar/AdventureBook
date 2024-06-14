import React from "react";
import Dropdown from "../nav_bar/dropdown";
import { BsThreeDots, BsTrash3 } from "react-icons/bs";
import CreateCommentContainer from "../comment/create_comment_container";
import CommentIndex from "../comment/comment_index";
import LikeContainer from "../like/like_container";
import LikeButton from "../like/like_button";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TimeElapsed from "./post_time_elapsed";
import { MdModeEdit } from "react-icons/md";
import { FaRegComment } from "react-icons/fa6";

class PostIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postLikedByCurrentUser: false,
            displayComments: true
        };

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

    openEditPostModal() {
        this.props.openModal("edit_post", this.props.post.id)
    };

    dropDownItems() {
        if (this.props.currentUser.id ===  this.props.post.author_id) {
            return (
                <Dropdown icon={<BsThreeDots color="#55575B" size={"20px"} />} myclass="post">
                    <li onClick={this.openEditPostModal}> <MdModeEdit className="edit-post-icon"/> Edit post</li>
                    <li onClick={() => this.props.deletePost(this.props.post.id)}> <BsTrash3 className="delete-post-icon"/>Move to trash</li>
                </ Dropdown>
            );
        } else {
            return <div className="dropdown-placeholder"></div>;
        }
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
            <div onClick={() => this.setState((prevProps) => {return {displayComments: !prevProps.displayComments}})} className="comments-count">
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
                        <Link to={`/users/${this.props.currentUser.id}`}>
                            <div className="image-container">
                                <img src={this.props.currentUser.profilePhoto} />
                            </div>
                        </Link>
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
        let postImage = this.props.post.photoUrl ? <img className="post-photo" src={this.props.post.photoUrl} /> : null;
        return (


            <div className="post">
                <div className="post-header">
                    <Link to={`/users/${this.props.postUser.id}`}>
                        <div className="image-container">
                            <img src={this.props.postUser.profilePhoto} />
                        </div>
                    </Link>

                    <div className="post-header-middle">
                        <Link to={`/users/${this.props.postUser.id}`}>
                            <div className="post-author-name"> {postAuthor} </div>
                        </Link>
                        <TimeElapsed  createdDate={this.props.post.created_at}/>
                    </div>


                    {this.dropDownItems()}
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
                        <FaRegComment className="comments-logo"/> Comment
                    </button>
                </div>
                <div className="hr" />


                {this.comments()}

            </div>
        );

    }
};

export default PostIndexItem;



