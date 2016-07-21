import {REQUEST_UNIVERSITIES, RECEIVE_UNIVERSITIES, SELECT_UNIVERSITY} from "../actions/universityActions";


function universityReducer(state = {
    isFetching: false,
    universities: [],
    selectedUniversityId: null
}, action) {
    switch (action.type) {
        case SELECT_UNIVERSITY:
            return Object.assign({}, state, {
                selectedUniversityId: action.universityId
            });
        case REQUEST_UNIVERSITIES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_UNIVERSITIES:
            return Object.assign({}, state, {
                isFetching: false,
                universities: action.universities,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default universityReducer