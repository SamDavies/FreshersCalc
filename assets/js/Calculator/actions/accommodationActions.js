/// action types

export const SELECT_ACCOMMODATION = 'SELECT_ACCOMMODATION';
export const REQUEST_ACCOMMODATION = 'REQUEST_ACCOMMODATION';
export const RECEIVE_ACCOMMODATION = 'RECEIVE_ACCOMMODATION';

/// action creators

export function selectAccommodation(accommodationId) {
    return {
        type: SELECT_ACCOMMODATION,
        accommodationId: accommodationId
    }
}

export function requestAccommodation() {
    return {
        type: REQUEST_ACCOMMODATION
    }
}

export function receiveAccommodation(json) {
    return {
        type: RECEIVE_ACCOMMODATION,
        accommodation: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getAccommodation() {
    return dispatch => {
        dispatch(requestAccommodation());

        return $.ajax({
            type: "GET",
            url: "/api/accommodation/"
        }).done((data, status, request) => {
            dispatch(receiveAccommodation(data))
        });
    }
}


