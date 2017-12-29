import {
    EDIT_ITEM_EXISTING,
    EDIT_ITEM_NEW,
    EDIT_ITEM_UPDATE,
    EDIT_ITEM_APPLY,
    EDIT_ITEM_STOP,
    EDIT_ITEM_RESET,
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

export function editNewItem(itemType, itemID, newItemAttributes) {
    return {
        type : EDIT_ITEM_NEW,
        payload : {
            itemType,
            itemID,
            newItemAttributes,
        }
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

export function applyItemEdits(itemType, itemID) {
    return {
        type : EDIT_ITEM_APPLY,
        payload : {
            itemType,
            itemID
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

export function resetEditedItem(itemType, itemID) {
    return {
        type : EDIT_ITEM_RESET,
        payload : {
            itemType,
            itemID,
        },
    };
}