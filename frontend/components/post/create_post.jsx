import React from "react";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";

const CreatePost = (props) => {
    return(
        <div className="create-post-top">
            <button 
                onClick={() => props.openModal("create_post")}
            >
                {`What's on your mind, ${props.currentUser.first_name}?`}

            </button>
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