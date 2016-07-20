import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
import userCourseReducer from "../Grade/reducers/userCourseReducer";
import statsReducer from "../Grade/reducers/statsReducer";

const rootReducer = combineReducers({
    userCourseReducer,
    statsReducer,
    routing
});

export default rootReducer