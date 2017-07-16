import {createReducer} from "common/utils/reducerUtils";

import {DATA_LOADED} from "features/tools/toolConstants";
import {
    UNIT_INFO_UPDATE,
    UNIT_INFO_SET_COLOR,
} from "./unitInfoConstants";

const initialState = {
    name : "N/A",
    affiliation : "",
    color : "blue"
};

function dataLoaded(state, payload) {
    const {unit} = payload;

    return unit;
}

function updateUnitInfo(state, payload) {
    return {
        ...state,
        ...payload,
    };
}

function setUnitColor(state, payload) {
    const {color} = payload;

    return {
        ...state,
        color
    };
}

export default createReducer(initialState, {
    [DATA_LOADED] : dataLoaded,
    [UNIT_INFO_UPDATE] : updateUnitInfo,
    [UNIT_INFO_SET_COLOR] : setUnitColor,
});