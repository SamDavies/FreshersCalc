/// action types

export const SELECT_HOME_TRIP = 'SELECT_HOME_TRIP';
export const REQUEST_HOME_TRIPS = 'REQUEST_HOME_TRIPS';
export const RECEIVE_HOME_TRIPS = 'RECEIVE_HOME_TRIPS';

/// action creators

export function selectHomeTrip(homeTripId) {
    return {
        type: SELECT_HOME_TRIP,
        homeTripId: homeTripId
    }
}

export function requestHomeTrips() {
    return {
        type: REQUEST_HOME_TRIPS
    }
}

export function receiveHomeTrips(json) {
    return {
        type: RECEIVE_HOME_TRIPS,
        homeTrips: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getHomeTrips() {
    return dispatch => {
        dispatch(requestHomeTrips());

        return $.ajax({
            type: "GET",
            url: "/api/home_trips/"
        }).done((data, status, request) => {
            dispatch(receiveHomeTrips(data))
        });
    }
}


