import {createReducer} from "common/utils/reducerUtils";

import {DATA_LOADED} from "features/tools/toolConstants";

import schema from "app/schema"

const initialState = schema.getDefaultState();

export function loadData(state, payload) {
    // Create a Redux-ORM session from our entities "tables"
    const session = schema.from(state);
    // Get a reference to the correct version of the Pilots class for this Session
    const {Pilot} = session;

    const {pilots} = payload;
    // Queue up creation commands for each pilot entry
    pilots.forEach(pilot => Pilot.parse(pilot));

    // Apply the queued updates and return the updated "tables"
    return session.reduce();
}


export default createReducer(initialState, {
    [DATA_LOADED] : loadData,
});
