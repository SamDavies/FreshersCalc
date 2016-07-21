/// action types

export const SELECT_CATERING = 'SELECT_CATERING';
export const REQUEST_CATERING = 'REQUEST_CATERING';
export const RECEIVE_CATERING = 'RECEIVE_CATERING';

/// action creators

export function selectCatering(cateringId) {
    return {
        type: SELECT_CATERING,
        cateringId: cateringId
    }
}

export function requestCatering() {
    return {
        type: REQUEST_CATERING
    }
}

export function receiveCatering(json) {
    return {
        type: RECEIVE_CATERING,
        catering: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getCatering() {
    return dispatch => {
        dispatch(requestCatering());

        return $.ajax({
            type: "GET",
            url: "/api/catering/"
        }).done((data, status, request) => {
            dispatch(receiveCatering(data))
        });
    }
}


