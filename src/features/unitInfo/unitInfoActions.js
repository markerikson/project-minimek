import {
    UNIT_INFO_UPDATE,
    UNIT_INFO_SET_COLOR,
} from "./unitInfoConstants";

export function updateUnitInfo(values) {
    return {
        type : UNIT_INFO_UPDATE,
        payload : values,
    };
}

export function setUnitColor(color) {
    return {
        type : UNIT_INFO_SET_COLOR,
        payload : {color}
    };
}