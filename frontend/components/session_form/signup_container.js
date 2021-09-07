import { connect } from "react-redux";
import {signup} from "../../actions/session_actions"
import Signup from "./signup";


const mdtp = (dispatch) => {
    return {
        signup: (formUser) => dispatch(signup(formUser))
    };
};


export default connect(null, mdtp)(Signup);