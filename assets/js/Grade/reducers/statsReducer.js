import {REQUEST_STATS, RECEIVE_STATS} from "../actions/statsActions";


function statsReducer(state = {
    isFetching: false,
    stats: {
        'percent_pass': 0.3,
        'percent_fail': 0.3,
        'percent_remaining': 0.4,
        'average_score': 0.0,
        'average_for_a': 0.0,
        'average_for_b': 0.0
    }
}, action) {
    switch (action.type) {
        case REQUEST_STATS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_STATS:
            return Object.assign({}, state, {
                isFetching: false,
                stats: action.stats,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default statsReducer