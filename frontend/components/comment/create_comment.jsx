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
        console.log("hi");
        this.props.createComment(this.state);
        this.setState({body: ""});
    };

    enterPressed(e) {
        // debugger;
        if (e.key === 'Enter') {
            // debugger
            this.handleSubmit(e);
        };
    };

    updateBody(e) {
        // debugger;
        this.setState({body: e.currentTarget.value});
        console.log("bye")
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