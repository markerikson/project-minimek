import cuid from "cuid";

import {
    editExistingItem,
    editNewItem,
    applyItemEdits,
    stopEditingItem
} from "features/editing/editingActions";

import {
    PILOT_SELECT,
    PILOT_EDIT_START,
    PILOT_EDIT_STOP,
} from "./pilotsConstants";

import {selectCurrentPilot, selectIsEditingPilot} from "./pilotsSelectors";
import {getUnsharedEntitiesSession} from "features/entities/entitySelectors";

export function selectPilot(pilotID) {
    return (dispatch, getState) => {
        const state = getState();
        const isEditing = selectIsEditingPilot(state);

        if(isEditing) {
            dispatch(cancelEditingPilot())
        }

        dispatch({
            type : PILOT_SELECT,
            payload : {currentPilot : pilotID},
        });
    }

}

export function startEditingPilot() {
    return (dispatch, getState) => {
        const currentPilot = selectCurrentPilot(getState());

        dispatch(editExistingItem("Pilot", currentPilot));
        dispatch({type : PILOT_EDIT_START});
    }
}

export function stopEditingPilot() {
    return (dispatch, getState) => {
        const currentPilot = selectCurrentPilot(getState());

        dispatch({type : PILOT_EDIT_STOP});
        dispatch(applyItemEdits("Pilot", currentPilot));
        dispatch(stopEditingItem("Pilot", currentPilot));
    }
}

export function cancelEditingPilot() {
    return (dispatch, getState) => {
        const currentPilot = selectCurrentPilot(getState());

        dispatch({type : PILOT_EDIT_STOP});
        dispatch(stopEditingItem("Pilot", currentPilot));
    }
}

export function addNewPilot() {
    return (dispatch, getState) => {
        const session = getUnsharedEntitiesSession(getState());
        const {Pilot} = session;

        const id = cuid();

        const newPilot = Pilot.generate({id});

        const pilotContents = newPilot.toJSON();

        dispatch(editNewItem("Pilot", id, pilotContents));
        dispatch(selectPilot(id));
        dispatch({type : PILOT_EDIT_START});
    }
}