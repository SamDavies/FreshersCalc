import {REQUEST_TAXIS, RECEIVE_TAXIS, SELECT_TAXI} from "../actions/taxiActions";


function taxiReducer(state = {
    isFetching: false,
    taxis: [],
    selectedTaxiId: null
}, action) {
    switch (action.type) {
        case SELECT_TAXI:
            return Object.assign({}, state, {
                selectedTaxiId: action.taxiId
            });
        case REQUEST_TAXIS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_TAXIS:
            return Object.assign({}, state, {
                isFetching: false,
                taxis: action.taxis,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default taxiReducer