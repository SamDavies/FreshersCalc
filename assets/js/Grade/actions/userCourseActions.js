var auth = require('../../auth');

/// action types

export const REQUEST_ADD_USER_COURSE = 'REQUEST_ADD_USER_COURSE';
export const DELETE_LOCAL_USER_COURSE = 'DELETE_LOCAL_USER_COURSE';
export const REQUEST_USER_COURSES = 'REQUEST_USER_COURSES';
export const RECEIVE_USER_COURSES = 'RECEIVE_USER_COURSES';

/// action creators

export function requestAddUserCourse() {
    return {
        type: REQUEST_ADD_USER_COURSE
    }
}


export function deleteLocalUserCourse(course) {
    return {
        type: DELETE_LOCAL_USER_COURSE,
        id: course.id
    }
}

export function requestUserCourses() {
    return {
        type: REQUEST_USER_COURSES
    }
}

export function receiveUserCourses(json) {
    return {
        type: RECEIVE_USER_COURSES,
        userCourses: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function addUserCourse(data) {
    return dispatch => {
        dispatch(requestAddUserCourse());

        return auth.ajax({
            type: "POST",
            url: "/api/course/",
            data: JSON.stringify(data)
        })
    }
}

export function deleteUserCourse(course) {
    return dispatch => {
        dispatch(deleteLocalUserCourse(course));

        return auth.ajax({
            type: "DELETE",
            url: "/api/course/" + course.id + "/"
        })
    }
}

export function getUserCourses() {
    return dispatch => {
        dispatch(requestUserCourses());

        return auth.ajax({
            type: "GET",
            url: "/api/course/"
        }).done((data, status, request) => {
            dispatch(receiveUserCourses(data))
        });
    }
}


