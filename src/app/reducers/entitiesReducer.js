import {createReducer} from "common/utils/reducerUtils";


import schema from "app/schema"

const initialState = schema.getDefaultState();


export default createReducer(initialState, {
    
});