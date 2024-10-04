import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { RxCross1 } from "react-icons/rx";

const PhotoViewer = ({ photoURL }) => {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeModal());
    };
    return (
        <div className="photo-viewer-overlay" onClick={handleClose}>
            <div className="close-icon" onClick={handleClose}>
                <RxCross1 />
            </div>
            <div className="photo-viewer-content" onClick={handleClose}>
                <img src={photoURL} onClick={(e) => e.stopPropagation()} alt="Selected" className="photo-viewer-img" />
            </div>
        </div>
    );
};

export default PhotoViewer;