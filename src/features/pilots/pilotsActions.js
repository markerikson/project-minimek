import {
    editExistingItem,
    stopEditingItem
} from "features/editing/editingActions";

import {
    PILOT_SELECT,
    PILOT_EDIT_START,
    PILOT_EDIT_STOP,
} from "./pilotsConstants";

export function selectPilot(pilotID) {
    return {
        type : PILOT_SELECT,
        payload : {currentPilot : pilotID},
    };
}

export function startEditingPilot(pilotID) {
    return (dispatch, getState) => {
        dispatch(editExistingItem("Pilot", pilotID));
        dispatch({type : PILOT_EDIT_START});
    }

}

export function stopEditingPilot(pilotID) {
    return (dispatch, getState) => {
        dispatch({type : PILOT_EDIT_STOP});
        dispatch(stopEditingItem("Pilot", pilotID));
    }
}