import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import heic2any from 'heic2any';
import { BiLoaderAlt } from "react-icons/bi";


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: props.post.body,
            photoFile: props.post.photoFile,
            photoUrl: props.post.photoUrl,
            isPhotoLoading: false,
            isPostLoading: false
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
        if (e.target.classList.contains("disable")) {
            return;
        }
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        };
        const id = this.props.post.id;
        this.setState({isPostLoading: true}, () => {
            this.props.action(formData, id)
                .then(() => this.setState({ body: "" }))
                .then(() => this.props.closeModal());
        })
    };

    handleFile(e) {
        const file = e.currentTarget.files[0];
        this.setState({isPhotoLoading: true, photoUrl: "" }, () => {
            if (file) {
                if (file.type === 'image/heic') {
                    heic2any({ blob: file })
                        .then((result) => {
                            const convertedFile = new File([result], file.name.replace('.heic', '.jpg'), { type: 'image/jpeg' });
                            this.setState({ photoFile: convertedFile, photoUrl: URL.createObjectURL(convertedFile) });
                            this.setState({ isPhotoLoading: false });
                        })
                        .catch((error) => {
                            console.error('Error converting HEIC to JPEG:', error);
                        });
                } else {
                    // for non-HEIC images
                    const fileReader = new FileReader();
                    fileReader.onloadend = () => {
                        this.setState({ photoFile: file, photoUrl: fileReader.result, isPhotoLoading: false });
                    };
                    fileReader.readAsDataURL(file);
                }
            } 
        });
    }


    render() {
        const currentUser = this.props.currentUser;
        const submitButtonClass = this.state.body.length < 1 || this.state.isPostLoading || this.state.isPhotoLoading ? " disable" : "";
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
        const postSpinner = <div className="post-spinner-container"> <div> <BiLoaderAlt className="spinner" /></div>   <div>Posting</div></div>
        return (
            <div className="post-modal">
                {this.state.isPostLoading ? postSpinner : ""}
                <form onSubmit={this.handleSubmit}>
                    <div className="create-post-header">
                        { this.props.formType === "Create Post" ? <div>Create Post</div> : <div>Edit Post</div> }
                        <div className="cross" onClick={() => this.props.closeModal()}>
                            <RxCross1 />
                        </div>
                    </div>

                    <div className="create-post-user-container" >
                        <Link to={`/users/${currentUser.id}`} onClick={() => this.props.closeModal()}>
                            <div className="image-container">
                                    <img src={currentUser.profilePhoto} />
                            </div>
                        </Link>

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
                        {this.state.isPhotoLoading ? <BiLoaderAlt className="spinner"/> : ""}
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

                    <div className={`create-post-submit${submitButtonClass}`} onClick={this.handleSubmit}>
                        { this.props.formType === "Create Post" ? "Post" : "Save" }
                    </div>

                    {/* // following div for spacing at bottom*/}
                    <div className="bottom-space"></div>
                </form>
                
            </div>
        );
    };
};

export default PostForm;