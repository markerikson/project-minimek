import {
    ENTITY_UPDATE,
    ENTITY_DELETE,
    ENTITY_CREATE,
} from "./entityConstants";

export function updateEntity(itemType, itemID, newItemAttributes) {
    return {
        type : ENTITY_UPDATE,
        payload : {
            itemType,
            itemID,
            newItemAttributes,
        },
    };
}

export function deleteEntity(itemType, itemID) {
    return {
        type : ENTITY_DELETE,
        payload : {itemType, itemID}
    };
}

export function createEntity(itemType, newItemAttributes) {
    return {
        type : ENTITY_CREATE,
        payload : {
            itemType,
            newItemAttributes,
        },
    };
}