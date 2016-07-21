import {SET_BUDGET} from "../actions/budgetActions";


function universityReducer(state = {
    budget: null
}, action) {
    switch (action.type) {
        case SET_BUDGET:
            return Object.assign({}, state, {
                budget: action.budget
            });
        default:
            return state
    }
}

export default universityReducer