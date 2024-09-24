import React from "react";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
                        body: this.props.comment.body,
                        post_id: this.props.comment.post_id,
                        rows: 1
                    };
    };


    handleSubmit(e) {
        e.preventDefault();
        const comment = Object.assign({}, this.state);
        comment.id = this.props.comment.id;
        this.props.action(comment).then(this.setState({ body: "", rows: 1 }));
    };

    enterPressed(e) {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        };
    };

    updateBody(e) {
        const textareaLineHeight = 18;
        const previousRows = e.target.rows;
        e.target.rows = 1;

        const currentRows = Math.floor(e.target.scrollHeight / textareaLineHeight) + 1;

        if (currentRows === previousRows) {
            e.target.rows = currentRows;
        }

        this.setState({ body: e.currentTarget.value, rows: currentRows });
    };

    clickHandler(e) {
        if (this.props.formType === "create") {
            this.setState({ rows: this.state.rows === 1 ? 2 : this.state.rows })
        } else {
            this.updateBody(e);
        }
    }


    render() {
        const commentLogoClass = this.state.body.length === 0 ? "disabled" : "";
        return(
            <>
                <Link to={`/users/${this.props.currentUser.id}`}>
                                <div className="image-container">
                                    <img src={this.props.currentUser.profilePhoto} />
                                </div>
                </Link>
                <form className="create-comment-form">
                    <textarea 
                        rows={this.state.rows}
                        onChange={this.updateBody} 
                        onKeyPress={this.enterPressed} 
                        value={this.state.body}
                        placeholder="Write a comment..."
                        onClick={this.clickHandler}
                    />
                    <IoSend 
                        className={`post-comment-logo ${commentLogoClass}`}
                        onClick={this.handleSubmit}
                    />
                </form>
            </>
        )
    };
};


export default CommentForm;