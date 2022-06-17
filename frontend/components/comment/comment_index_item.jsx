
import React from "react";
import EditCommentContainer  from "./edit_comment_container";
import { BsFillCaretDownFill } from "react-icons/bs";
import Dropdown from "../nav_bar/dropdown";

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
            return(<div>{this.props.comment.body}</div>);
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
                    <Dropdown icon={<BsFillCaretDownFill size={"15px"} />} myclass="comment">
                        <li className="edit-button-now" onClick={() => this.switchToggle("editBool")}>Edit</li>
                        <li onClick={() => this.props.deleteComment(commentId)}>Delete</li>
                    </ Dropdown>
                </div>

                <div>

                    
                    {!this.state.editBool && this.likeButton()}

                    {!this.state.editBool && this.numLikesBox()}
                </div>
            </>
        );
    };
};

export default CommentIndexItem;