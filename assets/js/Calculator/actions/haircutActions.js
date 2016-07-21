/// action types

export const SELECT_HAIRCUT = 'SELECT_HAIRCUT';
export const REQUEST_HAIRCUTS = 'REQUEST_HAIRCUTS';
export const RECEIVE_HAIRCUTS = 'RECEIVE_HAIRCUTS';

/// action creators

export function selectHaircut(haircutId) {
    return {
        type: SELECT_HAIRCUT,
        haircutId: haircutId
    }
}

export function requestHaircuts() {
    return {
        type: REQUEST_HAIRCUTS
    }
}

export function receiveHaircuts(json) {
    return {
        type: RECEIVE_HAIRCUTS,
        haircuts: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getHaircuts() {
    return dispatch => {
        dispatch(requestHaircuts());

        return $.ajax({
            type: "GET",
            url: "/api/haircut/"
        }).done((data, status, request) => {
            dispatch(receiveHaircuts(data))
        });
    }
}


