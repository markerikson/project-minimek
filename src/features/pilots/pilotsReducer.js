import {createReducer} from "common/utils/reducerUtils";

import {PILOT_SELECT} from "./pilotsConstants";

const initialState = {
    currentPilot : null
};

export function selectPilot(state, payload) {
    const prevSelectedPilot = state.currentPilot;
    const newSelectedPilot = payload.currentPilot;

    const isSamePilot = prevSelectedPilot === newSelectedPilot;
    
    return {
        // Deselect entirely if it's a second click on the same pilot,
        // otherwise go ahead and select the one that was clicked
        currentPilot : isSamePilot ? null : newSelectedPilot,
    };
}


export default createReducer(initialState, {
    [PILOT_SELECT] : selectPilot,
});