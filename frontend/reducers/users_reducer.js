
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

// QUESTION WHY DO WE NEED TO KEEP TRACK OF ALL THE USERS IN OUR STATE
const usersReducer = (state={}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.user.id]: action.user})
        default:
            return state;
    };
};

export default usersReducer;
