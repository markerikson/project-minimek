import {createReducer} from "common/utils/reducerUtils";

import schema from "app/schema";
const defaultEditingEntities = schema.getDefaultState();

export default createReducer(defaultEditingEntities, {
});