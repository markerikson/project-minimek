import {
    editExistingItem,
    stopEditingItem
} from "features/editing/editingActions";

import {
    PILOT_SELECT,
    PILOT_EDIT_START,
    PILOT_EDIT_STOP,
} from "./pilotsConstants";

import {selectCurrentPilot, selectIsEditingPilot} from "./pilotsSelectors";

export function selectPilot(pilotID) {
    return (dispatch, getState) => {
        const state = getState();
        const isEditing = selectIsEditingPilot(state);

        if(isEditing) {
            dispatch(stopEditingPilot())
        }

        dispatch({
            type : PILOT_SELECT,
            payload : {currentPilot : pilotID},
        });
    }

}

export function startEditingPilot(pilotID) {
    return (dispatch, getState) => {
        dispatch(editExistingItem("Pilot", pilotID));
        dispatch({type : PILOT_EDIT_START});
    }
}

export function stopEditingPilot(pilotID) {
    return (dispatch, getState) => {
        const currentPilot = selectCurrentPilot(getState());

        dispatch({type : PILOT_EDIT_STOP});
        dispatch(stopEditingItem("Pilot", currentPilot));
    }
}