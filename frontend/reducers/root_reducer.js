import { combineReducers } from "redux";
import entities from "./entities_reducer";
import session_reducer from "./session_reducer";

// debugger;
const rootReducer = combineReducers({
    entities: entities,
    session: session_reducer
});

export default rootReducer;