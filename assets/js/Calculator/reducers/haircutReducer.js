import {REQUEST_HAIRCUTS, RECEIVE_HAIRCUTS, SELECT_HAIRCUT} from "../actions/haircutActions";


function haircutReducer(state = {
    isFetching: false,
    haircuts: [],
    selectedHaircutId: null
}, action) {
    switch (action.type) {
        case SELECT_HAIRCUT:
            return Object.assign({}, state, {
                selectedHaircutId: action.haircutId
            });
        case REQUEST_HAIRCUTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_HAIRCUTS:
            return Object.assign({}, state, {
                isFetching: false,
                haircuts: action.haircuts,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default haircutReducer