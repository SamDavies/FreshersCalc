/// action types

export const SELECT_TAXI = 'SELECT_TAXI';
export const REQUEST_TAXIS = 'REQUEST_TAXIS';
export const RECEIVE_TAXIS = 'RECEIVE_TAXIS';

/// action creators

export function selectTaxi(taxiId) {
    return {
        type: SELECT_TAXI,
        taxiId: taxiId
    }
}

export function requestTaxis() {
    return {
        type: REQUEST_TAXIS
    }
}

export function receiveTaxis(json) {
    return {
        type: RECEIVE_TAXIS,
        taxis: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getTaxis() {
    return dispatch => {
        dispatch(requestTaxis());

        return $.ajax({
            type: "GET",
            url: "/api/taxi/"
        }).done((data, status, request) => {
            dispatch(receiveTaxis(data))
        });
    }
}


