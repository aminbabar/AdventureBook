import React from "react";


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: props.post.body,
            photoFile: props.post.photoFile,
            photoUrl: props.post.photoUrl
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
        const id = this.props.post.id;
        this.props.action(formData, id)
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
    };


    render() {
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <div className="post-modal">
                <form action="" onSubmit={this.handleSubmit}>
                    <label>
                        <textarea onChange={this.update("body")} value={this.state.body} placeholder="What's on your mind"></textarea>
                    </label>

                    <div>
                        {/* <span>Preview:</span> */}
                        {preview}
                    </div>

                    <input type="file" onChange={this.handleFile.bind(this)} />

                    <button>Post</button>
                </form>
                
            </div>
        );
    };
};

export default PostForm;