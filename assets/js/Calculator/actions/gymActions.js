/// action types

export const SELECT_GYM = 'SELECT_GYM';
export const REQUEST_GYMS = 'REQUEST_GYMS';
export const RECEIVE_GYMS = 'RECEIVE_GYMS';

/// action creators

export function selectGym(gymId) {
    return {
        type: SELECT_GYM,
        gymId: gymId
    }
}

export function requestGyms() {
    return {
        type: REQUEST_GYMS
    }
}

export function receiveGyms(json) {
    return {
        type: RECEIVE_GYMS,
        gyms: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getGyms() {
    return dispatch => {
        dispatch(requestGyms());

        return $.ajax({
            type: "GET",
            url: "/api/gym_membership/"
        }).done((data, status, request) => {
            dispatch(receiveGyms(data))
        });
    }
}


