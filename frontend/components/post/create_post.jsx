import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CreatePost = (props) => {
    return(
        <div className="create-post-top">
            <div className="create-post-container" >
                <Link to={`/users/${props.currentUser.id}`}>
                    <div className="image-container">
                            <img src={props.currentUser.profilePhoto} />
                    </div>
                </Link>

                <div className="create-post-text" onClick={() => props.openModal("create_post")}>
                    {`What's on your mind, ${props.currentUser.first_name}?`}
                </div>

            </div>
            <div className="hr"></div>

            <div className="create-post-buttons">
                <div onClick={() => props.openModal("create_post")}><MdOutlineVideoCameraFront /></div>
                <div onClick={() => props.openModal("create_post")}><GrGallery /></div>
            </div>
        </div>

    );
};

const mstp = (state) => {
    return ({
        currentUser: state.entities.users[state.session.currentUser]
    });
};

const mdtp = (dispatch) => {
    return ({
        openModal: (modal) => dispatch(openModal(modal))
    });
};


export default connect(mstp, mdtp)(CreatePost);