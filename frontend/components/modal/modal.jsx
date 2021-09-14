import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import CreatePostContainer from "../post/create_post_container";

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case "create_post":
            component = <CreatePostContainer />
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