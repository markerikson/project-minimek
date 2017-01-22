import {
    editExistingItem,
    applyItemEdits,
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
