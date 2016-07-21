import {REQUEST_GYMS, RECEIVE_GYMS, SELECT_GYM} from "../actions/gymActions";


function gymReducer(state = {
    isFetching: false,
    gyms: [],
    selectedGymId: null
}, action) {
    switch (action.type) {
        case SELECT_GYM:
            return Object.assign({}, state, {
                selectedGymId: action.gymId
            });
        case REQUEST_GYMS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_GYMS:
            return Object.assign({}, state, {
                isFetching: false,
                gyms: action.gyms,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default gymReducer