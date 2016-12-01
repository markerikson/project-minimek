import {createReducer} from "common/utils/reducerUtils";

import {DATA_LOADED} from "features/tools/toolConstants";

const initialState = {
    name : "N/A",
    affiliation : "",
};

function dataLoaded(state, payload) {
    const {unit} = payload;

    return unit;
}

export default createReducer(initialState, {
    [DATA_LOADED] : dataLoaded,
});