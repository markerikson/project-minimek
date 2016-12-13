import {createSelector} from "reselect";

export const selectPilots = state => state.pilots;

export const selectCurrentPilot = createSelector(
    selectPilots,
    pilots => pilots.currentPilot,
);