import {combineReducers} from "redux";

import testReducer from "./testReducer";

const rootReducer = combineReducers({
    test : testReducer,
});

export default rootReducer;