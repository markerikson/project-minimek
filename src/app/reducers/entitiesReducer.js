import {createReducer} from "common/utils/reducerUtils";

import {DATA_LOADED} from "features/tools/toolConstants";

import schema from "app/schema"

const initialState = schema.getDefaultState();

export function loadData(state, payload) {
    const session = schema.from(state);
    const {Pilot} = session;

    const {pilots} = payload;
    pilots.forEach(pilot => Pilot.parse(pilot));

    return session.reduce();
}



export default createReducer(initialState, {
    [DATA_LOADED] : loadData,
});