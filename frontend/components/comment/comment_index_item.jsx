
import React from "react";
import EditCommentContainer  from "./edit_comment_container";
import { BsThreeDots } from "react-icons/bs";

import Dropdown from "../nav_bar/dropdown";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
                                <div>
                                    {this.props.commentAuthor.first_name}
                                    {" "}
                                    {this.props.commentAuthor.last_name}
                                </div>
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
                            <div>count</div>
                            <div>like</div>
                            <div>num likes</div>
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
                <span onClick={() => this.props.openModal("like_index_comments", this.props.commentId)}>
                    num likes:{numLikes}
                </span>
            );
        }
    }


    likeButton() {
        const {deleteLike, likes, createLike, commentId} = this.props;
        if (!likes.currentUser) {
            const like = {likeable_type: "Comment", likeable_id: commentId}
            return(
                <span onClick={() => createLike(like)}>like</span>
            );
        } else {
            return(
                <span onClick={() => deleteLike(likes.currentUser.id)}>unlike</span>
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