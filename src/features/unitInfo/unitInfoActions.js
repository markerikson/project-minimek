import {UNIT_INFO_UPDATE} from "./unitInfoConstants";

export function updateUnitInfo(values) {
    return {
        type : UNIT_INFO_UPDATE,
        payload : values,
    };
}