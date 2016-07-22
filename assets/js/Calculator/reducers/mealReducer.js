import {REQUEST_MEALS, RECEIVE_MEALS, SELECT_MEAL} from "../actions/mealActions";


function mealReducer(state = {
    isFetching: false,
    meals: [],
    selectedMealId: null
}, action) {
    switch (action.type) {
        case SELECT_MEAL:
            return Object.assign({}, state, {
                selectedMealId: action.mealId
            });
        case REQUEST_MEALS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_MEALS:
            return Object.assign({}, state, {
                isFetching: false,
                meals: action.meals,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default mealReducer