import { combineReducers } from "redux";
import entities from "./entities_reducer";
import sessionReducer from "./session_reducer";

// debugger;
const rootReducer = combineReducers({
    entities: entities,
    session: sessionReducer
});

export default rootReducer;