import {
    EDIT_ITEM_EXISTING,
    EDIT_ITEM_UPDATE,
    EDIT_ITEM_STOP
} from "./editingConstants";


export function editExistingItem(itemType, itemID) {
    return {
        type : EDIT_ITEM_EXISTING,
        payload : {
            itemType,
            itemID
        },
    };
}

export function editItemAttributes(itemType, itemID, newItemAttributes) {
    return {
        type : EDIT_ITEM_UPDATE,
        payload : {
            itemType,
            itemID,
            newItemAttributes,
        },
    };
}

export function stopEditingItem(itemType, itemID) {
    return {
        type : EDIT_ITEM_STOP,
        payload : {
            itemType,
            itemID
        },
    };
}