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
import {getEntitiesSession, getUnsharedEntitiesSession} from "features/entities/entitySelectors";

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


export function handleStopEditingPilot(applyEdits = true) {
    return (dispatch, getState) => {
        const currentPilot = selectCurrentPilot(getState());

        // Determine if it's a new pilot based on the "current" slice contents
        const session = getEntitiesSession(getState());
        const {Pilot} = session;

        const isNewPilot = !Pilot.hasId(currentPilot);

        dispatch({type : PILOT_EDIT_STOP});

        if(applyEdits) {
            dispatch(applyItemEdits("Pilot", currentPilot));
        }

        dispatch(stopEditingItem("Pilot", currentPilot));

        if(isNewPilot) {
            dispatch({type : PILOT_SELECT, payload : {currentPilot : null}});
        }
    }
}


export function stopEditingPilot() {
    return (dispatch, getState) => {
        dispatch(handleStopEditingPilot(true));
    }
}

export function cancelEditingPilot() {
    return (dispatch, getState) => {
        dispatch(handleStopEditingPilot(false));
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