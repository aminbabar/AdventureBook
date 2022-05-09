import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updateUser } from "../../actions/session_actions";
import EditProfile from "./edit_profile";


const mstp = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.userId]
    };
}


const mdtp = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user)),
        closeModal: () => dispatch(closeModal())
    };
}


export default connect(mstp, mdtp)(EditProfile);