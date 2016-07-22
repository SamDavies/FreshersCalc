import {REQUEST_DRINKS, RECEIVE_DRINKS, SELECT_DRINK_COUNT} from "../actions/drinkActions";


function drinkReducer(state = {
    isFetching: false,
    drinks: [],
    selectedDrinkCounts: []
}, action) {
    switch (action.type) {
        case SELECT_DRINK_COUNT:
            return Object.assign({}, state, {
                selectedDrinkCounts: [
                    ...state.selectedDrinkCounts.filter(t => (t.id != action.drinkId)),
                    {id: action.drinkId, count: action.count}
                ]
            });
        case REQUEST_DRINKS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_DRINKS:
            return Object.assign({}, state, {
                isFetching: false,
                drinks: action.drinks,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default drinkReducer