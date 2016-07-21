/// action types

export const SELECT_UNIVERSITY = 'SELECT_UNIVERSITY';
export const REQUEST_UNIVERSITIES = 'REQUEST_UNIVERSITIES';
export const RECEIVE_UNIVERSITIES = 'RECEIVE_UNIVERSITIES';

/// action creators

export function selectUniversity(universityID) {
    return {
        type: SELECT_UNIVERSITY,
        universityID: universityID
    }
}

export function requestUniversities() {
    return {
        type: REQUEST_UNIVERSITIES
    }
}

export function receiveUniversities(json) {
    return {
        type: RECEIVE_UNIVERSITIES,
        universities: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getUniversities() {
    return dispatch => {
        dispatch(requestUniversities());

        return $.ajax({
            type: "GET",
            url: "/api/university/"
        }).done((data, status, request) => {
            dispatch(receiveUniversities(data))
        });
    }
}


