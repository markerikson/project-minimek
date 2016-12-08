import {createSelector} from "reselect";

const WEIGHT_CLASSES = [
    {name : "Light", weights : [20, 25, 30, 35]},
    {name : "Medium", weights : [40, 45, 50, 55]},
    {name : "Heavy", weights : [60, 65, 70, 75]},
    {name : "Assault", weights : [80, 85, 90, 95, 100]},
];

export function getWeightClass(weight) {
    const weightClass = WEIGHT_CLASSES.find(wc => wc.weights.includes(weight)) || {name : "Unknown"};
    return weightClass.name;
}


const selectMechs = state => state.mechs;

export const selectCurrentMech = createSelector(
    selectMechs,
    mechs => mechs.currentMech,
);