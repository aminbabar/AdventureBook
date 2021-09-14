import React from "react";


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.post.body,
            photoFile: null,
            photoUrl: null
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
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        };
        this.props.action(formData)
        .then(this.setState({ body: "" }))
        .then(this.props.closeModal());
    };

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        };
        if (file) {
            fileReader.readAsDataURL(file);
        };
        console.log(this.state);
    };


    render() {
        console.log(this.state);
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <div className="post-modal">
                <label>
                    <textarea onChange={this.update("body")} value={this.state.body} placeholder="What's on your mind"></textarea>
                </label>

                <div>
                    {/* <span>Preview:</span> */}
                    {preview}
                </div>

                <input type="file" onChange={this.handleFile.bind(this)}/>

                <button onClick={this.handleSubmit}>Post</button>
            </div>
        );
    };
};

export default PostForm;