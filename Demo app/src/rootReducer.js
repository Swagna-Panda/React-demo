import {combineReducers} from "redux";
import taskReducer from "./Reducer/taskReducer";

const rootReducer = combineReducers({task: taskReducer});

export default rootReducer
