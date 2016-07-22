import {INCREASE_NIGHT_COUNT, DECREASE_NIGHT_COUNT} from "../actions/nightCountActions";


function nightCountReducer(state = {
    selectedNightIds: [],
    days: [
        {id: 1, name: "Monday", value: 0},
        {id: 2, name: "Tuesday", value: 0},
        {id: 3, name: "Wednesday", value: 0},
        {id: 4, name: "Thursday", value: 0},
        {id: 5, name: "Friday", value: 0},
        {id: 6, name: "Saturday", value: 0},
        {id: 7, name: "Sunday", value: 0}
    ]
}, action) {
    switch (action.type) {
        case INCREASE_NIGHT_COUNT:
            return Object.assign({}, state, {
                selectedNightIds: [
                    ...state.selectedNightIds,
                    action.dayId
                ]
            });
        case DECREASE_NIGHT_COUNT:
            return Object.assign({}, state, {
                selectedNightIds: [
                    ...state.selectedNightIds.filter(t => (t != action.dayId))
                ]
            });
        default:
            return state
    }
}

export default nightCountReducer