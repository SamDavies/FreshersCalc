import {REQUEST_SHOPPINGS, RECEIVE_SHOPPINGS, SELECT_SHOPPING} from "../actions/shoppingActions";


function shoppingReducer(state = {
    isFetching: false,
    shoppings: [],
    selectedShoppingId: null
}, action) {
    switch (action.type) {
        case SELECT_SHOPPING:
            return Object.assign({}, state, {
                selectedShoppingId: action.shoppingId
            });
        case REQUEST_SHOPPINGS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_SHOPPINGS:
            return Object.assign({}, state, {
                isFetching: false,
                shoppings: action.shoppings,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default shoppingReducer