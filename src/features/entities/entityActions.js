import {ENTITY_UPDATE} from "./entityConstants";

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