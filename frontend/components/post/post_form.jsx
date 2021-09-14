import React from "react";


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.post.body,
            photoFile: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    };


    update(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        };
    };


    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        formData.append('post[photo]', this.state.photoFile);
        this.props.action(formData)
        .then(this.setState({ body: "" }))
        .then(this.props.closeModal());
    };

    handleFile(e) {
        this.setState( {photoFile: e.currentTarget.files[0]})
    };


    render() {
        console.log(this.state);
        return (
            <div className="post-modal">
                <label>
                    <textarea onChange={this.update("body")} value={this.state.body} placeholder="What's on your mind"></textarea>
                </label>

                <input type="file" onChange={this.handleFile.bind(this)}/>

                <button onClick={this.handleSubmit}>Post</button>
            </div>
        );
    };
};

export default PostForm;