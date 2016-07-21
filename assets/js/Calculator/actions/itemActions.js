/// action types

export const SELECT_ITEM = 'SELECT_ITEM';
export const DESELECT_ITEM = 'DESELECT_ITEM';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

/// action creators

export function selectItem(itemId) {
    return {
        type: SELECT_ITEM,
        itemId: itemId
    }
}

export function deselectItem(itemId) {
    return {
        type: DESELECT_ITEM,
        itemId: itemId
    }
}

export function requestItems() {
    return {
        type: REQUEST_ITEMS
    }
}

export function receiveItems(json) {
    return {
        type: RECEIVE_ITEMS,
        items: json,
        receivedAt: Date.now()
    }
}

/// Thunks (Async function which returns promise)

export function getItems() {
    return dispatch => {
        dispatch(requestItems());

        return $.ajax({
            type: "GET",
            url: "/api/item/"
        }).done((data, status, request) => {
            dispatch(receiveItems(data))
        });
    }
}


