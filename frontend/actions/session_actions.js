import * as APIUtil from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
// export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";


// Action creators
const receiveCurrentUser = (user) => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user
    });
}

const logoutCurrentUser = () => {
    return ({
        type: LOGOUT_CURRENT_USER
    });
};


// thunk action creators

// QUESTION WHERE DOES THIS DISPATCH COME FROM. WATCH MEGANS VIDEO
export const signup = formUser => dispatch => APIUtil.signup(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));


export const login = formUser => dispatch => APIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));


export const logout = () => dispatch => APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));