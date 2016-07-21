import {REQUEST_UNIVERSITIES, RECEIVE_UNIVERSITIES, SELECT_UNIVERSITY} from "../actions/universityActions";


function universityReducer(state = {
    isFetching: false,
    university: [],
    selectedUniversityID: null
}, action) {
    switch (action.type) {
        case SELECT_UNIVERSITY:
            return Object.assign({}, state, {
                selectedUniversityID: action.universityID
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