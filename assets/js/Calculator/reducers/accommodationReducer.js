import {REQUEST_ACCOMMODATION, RECEIVE_ACCOMMODATION, SELECT_ACCOMMODATION} from "../actions/accommodationActions";


function accommodationReducer(state = {
    isFetching: false,
    accommodation: [],
    selectedAccommodationId: null
}, action) {
    switch (action.type) {
        case SELECT_ACCOMMODATION:
            return Object.assign({}, state, {
                selectedAccommodationId: action.accommodationId
            });
        case REQUEST_ACCOMMODATION:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_ACCOMMODATION:
            return Object.assign({}, state, {
                isFetching: false,
                accommodation: action.accommodation,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default accommodationReducer