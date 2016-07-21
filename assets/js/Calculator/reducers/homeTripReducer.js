import {REQUEST_HOME_TRIPS, RECEIVE_HOME_TRIPS, SELECT_HOME_TRIP} from "../actions/homeTripActions";


function homeTripReducer(state = {
    isFetching: false,
    homeTrips: [],
    selectedHomeTripId: null
}, action) {
    switch (action.type) {
        case SELECT_HOME_TRIP:
            return Object.assign({}, state, {
                selectedHomeTripId: action.homeTripId
            });
        case REQUEST_HOME_TRIPS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_HOME_TRIPS:
            return Object.assign({}, state, {
                isFetching: false,
                homeTrips: action.homeTrips,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default homeTripReducer