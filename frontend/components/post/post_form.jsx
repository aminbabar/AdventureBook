import React from "react";


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleSubmit = this.handleSubmit.bind(this);

    };


    update(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    };


    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
            .then(this.setState({ body: "" }));
        
    };


    render() {
        return (
            <div className="post-modal">
                <label>
                    <textarea onChange={this.update("body")} value={this.state.body} placeholder="What's on your mind"></textarea>
                </label>

                <button onClick={this.handleSubmit}>Post</button>
            </div>
        );
    };
};

export default PostForm;