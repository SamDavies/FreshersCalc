import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
import universityReducer from "../Calculator/reducers/universityReducer";

const rootReducer = combineReducers({
    universityReducer,
    routing
});

export default rootReducer