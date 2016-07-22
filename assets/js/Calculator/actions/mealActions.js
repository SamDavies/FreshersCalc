/// action types

export const SELECT_MEAL = 'SELECT_MEAL';
export const REQUEST_MEALS = 'REQUEST_MEALS';
export const RECEIVE_MEALS = 'RECEIVE_MEALS';

/// action creators

export function selectMeal(mealId) {
    return {
        type: SELECT_MEAL,
        mealId: mealId
    }
}

export function requestMeals() {
    return {
        type: REQUEST_MEALS
    }
}

export function receiveMeals(json) {
    return {
        type: RECEIVE_MEALS,
        meals: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getMeals() {
    return dispatch => {
        dispatch(requestMeals());

        return $.ajax({
            type: "GET",
            url: "/api/meal/"
        }).done((data, status, request) => {
            dispatch(receiveMeals(data))
        });
    }
}


