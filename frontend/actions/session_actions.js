import * as APIUtil from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";


// Action creators
const receiveCurrentUser = (user) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user
    });
}

const receiveUser = (payload) => {
    return ({
        type: RECEIVE_USER,
        payload
    });
};

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    });
};

export const receiveErrors = (errors) => {
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors
    });
};

export const resetErrors = () => {
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


export const fetchUser = (userId) => dispatch => APIUtil.fetchUser(userId)
        .then((payload) => dispatch(receiveUser(payload)));