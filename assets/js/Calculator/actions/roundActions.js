/// action types

export const SELECT_ROUND = 'SELECT_ROUND';
export const REQUEST_ROUNDS = 'REQUEST_ROUNDS';
export const RECEIVE_ROUNDS = 'RECEIVE_ROUNDS';

/// action creators

export function selectRound(roundId) {
    return {
        type: SELECT_ROUND,
        roundId: roundId
    }
}

export function requestRounds() {
    return {
        type: REQUEST_ROUNDS
    }
}

export function receiveRounds(json) {
    return {
        type: RECEIVE_ROUNDS,
        rounds: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getRounds() {
    return dispatch => {
        dispatch(requestRounds());

        return $.ajax({
            type: "GET",
            url: "/api/round/"
        }).done((data, status, request) => {
            dispatch(receiveRounds(data))
        });
    }
}


