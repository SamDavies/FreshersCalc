import {REQUEST_CATERING, RECEIVE_CATERING, SELECT_CATERING} from "../actions/cateringActions";


function cateringReducer(state = {
    isFetching: false,
    catering: [],
    selectedCateringId: null
}, action) {
    switch (action.type) {
        case SELECT_CATERING:
            return Object.assign({}, state, {
                selectedCateringId: action.cateringId
            });
        case REQUEST_CATERING:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CATERING:
            return Object.assign({}, state, {
                isFetching: false,
                catering: action.catering,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default cateringReducer