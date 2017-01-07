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

export function startEditingPilot() {
    return {
        type : PILOT_EDIT_START,
    };
}

export function stopEditingPilot() {
    return {
        type : PILOT_EDIT_STOP,
    };
}