
import React from "react";
import EditCommentContainer  from "./edit_comment_container";
import { BsThreeDots } from "react-icons/bs";

import Dropdown from "../nav_bar/dropdown";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CommentTimeElapsed from "./comment_time_elapsed";
import { AiFillLike } from "react-icons/ai";


class CommentIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editBool: false
        };

        this.switchToggle = this.switchToggle.bind(this);
        this.editOrDisplay = this.editOrDisplay.bind(this);
    };

    switchToggle(field) {
        this.setState((prevState) => {
            return{[field]: !prevState[field]};
        });
    };

    editOrDisplay() {
        if (this.state.editBool) {
            return(<EditCommentContainer commentId={this.props.comment.id}/>);
        } else {
            return(
                <div className="comment-body-container">
                    <Link to={`/users/${this.props.commentAuthor.id}`}>
                        <div className="image-container">
                            <img src={this.props.commentAuthor.profilePhoto} />
                        </div>
                    </Link>

                    <div className="comment-and-dropdown-and-likes-container">
                        <div className="comment-and-dropdown-container">
                            <div className="comment-body">
                                <Link to={`/users/${this.props.commentAuthor.id}`}>
                                    <div className="author-name-comment">
                                        {this.props.commentAuthor.first_name}
                                        {" "}
                                        {this.props.commentAuthor.last_name}
                                    </div>
                                </Link>

                                <div>
                                    {this.props.comment.body}
                                </div>
                            </div>

                            <Dropdown icon={<BsThreeDots color="#55575B" size={"20px"} />} myclass="comment">
                                <li className="edit-button-now" onClick={() => this.switchToggle("editBool")}>Edit</li>
                                <li onClick={() => this.props.deleteComment(this.props.commentId)}>Delete</li>
                            </ Dropdown>
                        </div>

                        <div className="likes-container">
                            <div className="date-like-button">
                                <div className="comment-date"><CommentTimeElapsed createdDate={this.props.comment.created_at} /></div>
                                <div className="like-button-comment">{this.likeButton()}</div>
                            </div>
                            
                            <div>{this.numLikesBox()}</div>
                        </div>

                    </div>



                </div>
                );
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.editBool) {
            this.setState({editBool: false});
        };
    };

    numLikesBox() {
        const numLikes = Object.values(this.props.likes).length;
        if (numLikes > 0) {
            return (
                <div className="like-logo-and-num-likes" onClick={() => this.props.openModal("like_index_comments", this.props.commentId)}>
                    <AiFillLike className="like-logo-count"/>
                    <div className="likes-count-comment">
                        {numLikes}
                    </div>
                </div>
            );
        }
    }


    likeButton() {
        const {deleteLike, likes, createLike, commentId} = this.props;
        if (!likes.currentUser) {
            const like = {likeable_type: "Comment", likeable_id: commentId}
            return(
                <span onClick={() => createLike(like)}>Like</span>
            );
        } else {
            return(
                <span className="comment-liked" onClick={() => deleteLike(likes.currentUser.id)}>Like</span>
            );
        };
    }


    render() {

        const commentId = this.props.comment.id;
        return (
            <>
                <div>
                    {this.editOrDisplay()}
                </div>

                <div>

                    
                    {/* {!this.state.editBool && this.likeButton()} */}

                    {/* {!this.state.editBool && this.numLikesBox()} */}
                </div>
            </>
        );
    };
};

export default CommentIndexItem;