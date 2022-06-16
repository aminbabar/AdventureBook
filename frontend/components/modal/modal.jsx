import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import CreatePostContainer from "../post/create_post_container";
import EditPostContainer from "../post/edit_post_container";
import SignupContainer from "../session_form/signup_container";
import EditProfileContainer from "../profile/edit_profile_container";
import LikeIndex from "../like/like_index";

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.modal) {
        case "create_post":
            component = <CreatePostContainer />
            break;
        case "edit_post":
            component = <EditPostContainer postId={modal.id}/>
            break;
        case "create_user":
            component = <SignupContainer />
            break;
        case "edit_profile":
            component = <EditProfileContainer userId={modal.id} />
            break;
        case "like_index":
            component = <LikeIndex postOrCommentId={modal.id} /> 
            break;
        default:
            return null;
    };

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={(e) => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

const mstp = (state) => {
    return ({
        modal: state.ui.modal
    });
};

const mdtp = (dispatch) => {
    return({
        closeModal: () => dispatch(closeModal())
    });
};

export default connect(mstp, mdtp)(Modal);