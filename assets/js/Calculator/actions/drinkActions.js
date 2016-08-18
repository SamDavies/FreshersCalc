/// action types

export const SELECT_DRINK_COUNT = 'SELECT_DRINK_COUNT';
export const REQUEST_DRINKS = 'REQUEST_DRINKS';
export const RECEIVE_DRINKS = 'RECEIVE_DRINKS';

/// action creators

export function selectDrinkCount(drinkId) {
    return {
        type: SELECT_DRINK_COUNT,
        drinkId: drinkId
    }
}

export function requestDrinks() {
    return {
        type: REQUEST_DRINKS
    }
}

export function receiveDrinks(json) {
    return {
        type: RECEIVE_DRINKS,
        drinks: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getDrinks() {
    return dispatch => {
        dispatch(requestDrinks());

        return $.ajax({
            type: "GET",
            url: "/api/drink/"
        }).done((data, status, request) => {
            dispatch(receiveDrinks(data))
        });
    }
}


