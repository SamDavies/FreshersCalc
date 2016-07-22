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
import nightCountReducer from "../Calculator/reducers/nightCountReducer";
import drinkReducer from "../Calculator/reducers/drinkReducer";
import roundReducer from "../Calculator/reducers/roundReducer";
import mealReducer from "../Calculator/reducers/mealReducer";
import taxiReducer from "../Calculator/reducers/taxiReducer";

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
    nightCountReducer,
    drinkReducer,
    roundReducer,
    mealReducer,
    taxiReducer,
    routing
});

export default rootReducer