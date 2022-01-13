import React from "react";

class CreateComment extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.enterPressed = this.enterPressed.bind(this);
        this.state = {
                        body: "",
                        post_id: this.props.postId
                    };
    };


    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        this.setState({body: ""});
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


export default CreateComment;