import {PILOT_SELECT} from "./pilotsConstants";

export function selectPilot(pilotID) {
    return {
        type : PILOT_SELECT,
        payload : {currentPilot : pilotID},
    };
}