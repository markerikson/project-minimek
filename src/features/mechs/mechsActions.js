import {MECH_SELECT} from "./mechsConstants";

export function selectMech(mechID) {
    return {
        type : MECH_SELECT,
        payload : {currentMech : mechID},
    };
}