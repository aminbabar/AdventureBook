import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const CreatePost = (props) => {
    return(
        <div className="create-post-top">
            <div className="create-post-container" onClick={() => props.openModal("create_post")}>
                <div className="image-container">
                    <img src={props.currentUser.profilePhoto} />
                </div>

                <div className="create-post-text">
                    {`What's on your mind, ${props.currentUser.first_name}?`}
                </div>

            </div>
            <div className="hr-container">
                <div className="hr"></div>
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