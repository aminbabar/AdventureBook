import * as APIUtil from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";


// Action creators
const receiveCurrentUser = (user) => {
    debugger;
    return ({
        type: RECEIVE_CURRENT_USER,
        user
    });
}

const logoutCurrentUser = () => {
    debugger;
    return ({
        type: LOGOUT_CURRENT_USER
    });
};

export const receiveErrors = (errors) => {
    debugger;
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors
    });
};

export const resetErrors = () => {
    debugger;
    return ({
        type: RESET_ERRORS
    });
};




// thunk action creators

export const signup = formUser => dispatch => APIUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), err => (
        dispatch(receiveErrors(err.responseJSON))
    ));


export const login = formUser => dispatch => APIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), err => (
        dispatch(receiveErrors(err.responseJSON))
    ));


export const logout = () => dispatch => APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));