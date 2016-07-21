import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
import universityReducer from "../Calculator/reducers/universityReducer";
import budgetReducer from "../Calculator/reducers/budgetReducer";
import accommodationReducer from "../Calculator/reducers/accommodationReducer";
import cateringReducer from "../Calculator/reducers/cateringReducer";

const rootReducer = combineReducers({
    universityReducer,
    budgetReducer,
    accommodationReducer,
    cateringReducer,
    routing
});

export default rootReducer