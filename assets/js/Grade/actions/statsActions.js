var auth = require('../../auth');

/// action types

export const REQUEST_STATS = 'REQUEST_STATS';
export const RECEIVE_STATS = 'RECEIVE_STATS';

/// action creators

export function requestStats() {
    return {
        type: REQUEST_STATS
    }
}

export function receiveStats(json) {
    return {
        type: RECEIVE_STATS,
        stats: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getStats() {
    return dispatch => {
        dispatch(requestStats());

        return auth.ajax({
            type: "GET",
            url: "/api/stats/"
        }).done((data, status, request) => {
            dispatch(receiveStats(data))
        });
    }
}


