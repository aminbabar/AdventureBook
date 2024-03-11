import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

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
        const currentUser = this.props.currentUser;
        const submitButtonClass = this.state.body.length < 1 ? " disable" : "";
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        return (
            <div className="post-modal">
                <form onSubmit={this.handleSubmit}>
                    <div className="create-post-header">
                        <div>Create Post</div>
                        <div className="cross" onClick={() => this.props.closeModal()}>
                            <RxCross1 />
                        </div>
                    </div>

                    <div className="create-post-user-container" >
                        <div className="image-container">
                            <Link to={`/users/${currentUser.id}`} onClick={() => this.props.closeModal()}>
                                <img src={currentUser.profilePhoto} />
                            </Link>
                        </div>

                        <div className="create-post-user">
                            {currentUser.first_name} {currentUser.last_name}
                        </div>
                    </div>

                    <label>
                        <textarea 
                            onChange={this.update("body")} 
                            value={this.state.body} 
                            placeholder={`What's on your mind, ${currentUser.first_name}`}>
                        </textarea>
                    </label>

                    <div className="preview">
                        {preview}
                    </div>
                    <label htmlFor="file-upload">
                        <div className="file-upload">
                            <div>
                                Add video or photo to your post
                            </div>

                            <div className="logos">
                                <div className="video">
                                    <MdOutlineVideoCameraFront />
                                </div>

                                <div>
                                    <GrGallery className="photo" />
                                </div>
                            </div>
                        </div>
                    </label>
                    <input type="file" id="file-upload" onChange={this.handleFile.bind(this)} />

                    <div className={`create-post-submit${submitButtonClass}`} onClick={this.handleSubmit}>Post</div>

                    {/* // following div for spacing at bottom*/}
                    <div className="bottom-space"></div>
                </form>
                
            </div>
        );
    };
};

export default PostForm;