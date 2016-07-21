/// action types

export const SELECT_SHOPPING = 'SELECT_SHOPPING';
export const REQUEST_SHOPPINGS = 'REQUEST_SHOPPINGS';
export const RECEIVE_SHOPPINGS = 'RECEIVE_SHOPPINGS';

/// action creators

export function selectShopping(shoppingId) {
    return {
        type: SELECT_SHOPPING,
        shoppingId: shoppingId
    }
}

export function requestShoppings() {
    return {
        type: REQUEST_SHOPPINGS
    }
}

export function receiveShoppings(json) {
    return {
        type: RECEIVE_SHOPPINGS,
        shoppings: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getShoppings() {
    return dispatch => {
        dispatch(requestShoppings());

        return $.ajax({
            type: "GET",
            url: "/api/shopping/"
        }).done((data, status, request) => {
            dispatch(receiveShoppings(data))
        });
    }
}


