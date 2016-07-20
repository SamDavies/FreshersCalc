import {
    REQUEST_USER_COURSES,
    RECEIVE_USER_COURSES,
    DELETE_LOCAL_USER_COURSE,
    REQUEST_ADD_USER_COURSE
} from "../actions/userCourseActions";


function userCourseReducer(state = {
    isFetching: false,
    isStale: true,
    userCourses: []
}, action) {
    switch (action.type) {
        case REQUEST_USER_COURSES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_USER_COURSES:
            return Object.assign({}, state, {
                isFetching: false,
                isStale: false,
                userCourses: action.userCourses,
                lastUpdated: action.receivedAt
            });
        case DELETE_LOCAL_USER_COURSE:
            return Object.assign({}, state, {
                userCourses: [
                    ...state.userCourses.slice(0, action.id),
                    ...state.userCourses.slice(action.id + 1)
                ]
            });
        case REQUEST_ADD_USER_COURSE:
            return Object.assign({}, state, {
                isStale: true
            });
        default:
            return state
    }
}

export default userCourseReducer