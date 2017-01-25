import {createReducer} from "common/utils/reducerUtils";

import {
    createEntity,
    updateEntity,
    deleteEntity
} from "features/entities/entityReducer";

import {
    EDIT_ITEM_EXISTING,
    EDIT_ITEM_UPDATE,
    EDIT_ITEM_STOP
} from "./editingConstants";


import {selectEntities} from "features/entities/entitySelectors";
import {selectEditingEntities} from "./editingSelectors";
import {
    readEntityData,
    updateEditingEntitiesState,
} from "./editingUtils";



export function copyEntity(sourceEntities, destinationEntities, payload) {
    const {itemID, itemType} = payload;

    const newItemAttributes = readEntityData(sourceEntities, itemType, itemID);
    const creationPayload = {itemType, itemID, newItemAttributes}

    const updatedEntities = createEntity(destinationEntities, creationPayload);
    return updatedEntities;
}




export function editItemExisting(state, payload) {
    const entities = selectEntities(state);
    const editingEntities = selectEditingEntities(state);

    const updatedEditingEntities = copyEntity(entities, editingEntities, payload);

    return updateEditingEntitiesState(state, updatedEditingEntities);
}

export function editItemUpdate(state, payload) {
    const editingEntities = selectEditingEntities(state);

    const updatedEditingEntities = updateEntity(editingEntities, payload);
    return updateEditingEntitiesState(state, updatedEditingEntities);
}

export function editItemStop(state, payload) {
    const editingEntities = selectEditingEntities(state);

    const updatedEditingEntities = deleteEntity(editingEntities, payload);
    return updateEditingEntitiesState(state, updatedEditingEntities);
}




const editingFeatureReducer = createReducer({}, {
    [EDIT_ITEM_EXISTING] : editItemExisting,
    [EDIT_ITEM_UPDATE] : editItemUpdate,
    [EDIT_ITEM_STOP] : editItemStop,
});

export default editingFeatureReducer;