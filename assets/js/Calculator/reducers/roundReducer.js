import {REQUEST_ROUNDS, RECEIVE_ROUNDS, SELECT_ROUND} from "../actions/roundActions";


function roundReducer(state = {
    isFetching: false,
    rounds: [],
    selectedRoundId: null
}, action) {
    switch (action.type) {
        case SELECT_ROUND:
            return Object.assign({}, state, {
                selectedRoundId: action.roundId
            });
        case REQUEST_ROUNDS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_ROUNDS:
            return Object.assign({}, state, {
                isFetching: false,
                rounds: action.rounds,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default roundReducer