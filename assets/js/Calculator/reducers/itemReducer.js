import {REQUEST_ITEMS, RECEIVE_ITEMS, SELECT_ITEM, DESELECT_ITEM} from "../actions/itemActions";


function itemReducer(state = {
    isFetching: false,
    items: [],
    selectedItemIds: []
}, action) {
    switch (action.type) {
        case SELECT_ITEM:
            return Object.assign({}, state, {
                selectedItemIds: [
                    ...state.selectedItemIds,
                    action.itemId
                ]
            });
        case DESELECT_ITEM:
            return Object.assign({}, state, {
                selectedItemIds: [
                    ...state.selectedItemIds.filter(t => (t != action.itemId))
                ]
            });
        case REQUEST_ITEMS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_ITEMS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.items,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

export default itemReducer