import React from "react";

class CommentForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
        this.state = {
                        body: this.props.comment.body,
                        post_id: this.props.comment.post_id
                    };
    };


    handleSubmit(e) {
        e.preventDefault();
        const comment = Object.assign({}, this.state);
        comment.id = this.props.comment.id;
        this.props.action(comment).then(this.setState({ body: "" }));
    };

    enterPressed(e) {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        };
    };

    updateBody(e) {
        this.setState({body: e.currentTarget.value});
    };


    render() {
        return(
            <form className="create-comment-form">
                <textarea onChange={this.updateBody} onKeyPress={this.enterPressed} value={this.state.body}/>
            </form>
        )
    };
};


export default CommentForm;