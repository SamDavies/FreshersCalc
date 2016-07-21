import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
import universityReducer from "../Calculator/reducers/universityReducer";
import budgetReducer from "../Calculator/reducers/budgetReducer";
import accommodationReducer from "../Calculator/reducers/accommodationReducer";
import cateringReducer from "../Calculator/reducers/cateringReducer";
import itemReducer from "../Calculator/reducers/itemReducer";
import homeTripReducer from "../Calculator/reducers/homeTripReducer";
import gymReducer from "../Calculator/reducers/gymReducer";
import haircutReducer from "../Calculator/reducers/haircutReducer";
import shoppingReducer from "../Calculator/reducers/shoppingReducer";

const rootReducer = combineReducers({
    universityReducer,
    budgetReducer,
    accommodationReducer,
    cateringReducer,
    itemReducer,
    homeTripReducer,
    gymReducer,
    haircutReducer,
    shoppingReducer,
    routing
});

export default rootReducer