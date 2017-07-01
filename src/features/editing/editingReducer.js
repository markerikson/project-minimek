import {createReducer} from "common/utils/reducerUtils";

import orm from "app/schema";

import {
    createEntity,
    updateEntity,
    deleteEntity
} from "features/entities/entityReducer";

import {
    EDIT_ITEM_EXISTING,
    EDIT_ITEM_UPDATE,
    EDIT_ITEM_APPLY,
    EDIT_ITEM_STOP,
    EDIT_ITEM_RESET,
} from "./editingConstants";

import {getModelByType} from "common/utils/modelUtils";

import {selectEntities} from "features/entities/entitySelectors";
import {selectEditingEntities} from "./editingSelectors";
import {
    readEntityData,
    updateEntitiesState,
    updateEditingEntitiesState,
} from "./editingUtils";



export function copyEntity(sourceEntities, destinationEntities, payload) {
    const {itemID, itemType} = payload;

    const newItemAttributes = readEntityData(sourceEntities, itemType, itemID);
    const creationPayload = {itemType, itemID, newItemAttributes}

    const updatedEntities = createEntity(destinationEntities, creationPayload);
    return updatedEntities;
}



export function updateEditedEntity(sourceEntities, destinationEntities, payload) {
    // Start by reading our "work-in-progress" data
    const readSession = orm.session(sourceEntities);

    const {itemType, itemID} = payload;

    // Look up the model instance for the requested item
    const model = getModelByType(readSession, itemType, itemID);


    // We of course will be updating our "current" relational data
    let writeSession = orm.session(destinationEntities);

    const ModelClass = writeSession[itemType];

    if(ModelClass.hasId(itemID)) {
        // Look up the original Model instance for the top item
        const existingItem = ModelClass.withId(itemID);

        if(existingItem.updateFrom) {
            // Each model class should know how to properly update itself and its
            // relations from another model of the same type.  Ask the original model to
            // update itself based on the "work-in-progress" model. Redux-ORM will apply
            // those changes as we go, and update `session.state` immutably.
            existingItem.updateFrom(model);
        }
    }

    // Return the updated "current" relational data.
    return writeSession.state;
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


export function editItemApply(state, payload) {
    const entities = selectEntities(state);
    const editingEntities = selectEditingEntities(state);

    const updatedEntities = updateEditedEntity(editingEntities, entities, payload);
    return updateEntitiesState(state, updatedEntities);
}


export function editItemReset(state, payload) {
    const stateWithoutItem = editItemStop(state, payload);
    const stateWithCurrentItem = editItemExisting(stateWithoutItem, payload);

    return stateWithCurrentItem;
}



const editingFeatureReducer = createReducer({}, {
    [EDIT_ITEM_EXISTING] : editItemExisting,
    [EDIT_ITEM_UPDATE] : editItemUpdate,
    [EDIT_ITEM_APPLY] : editItemApply,
    [EDIT_ITEM_STOP] : editItemStop,
    [EDIT_ITEM_RESET] : editItemReset,
});

export default editingFeatureReducer;
