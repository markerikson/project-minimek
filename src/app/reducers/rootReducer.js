import {combineReducers} from "redux";

import tabReducer from "features/tabs/tabReducer";

const rootReducer = combineReducers({
    tabs : tabReducer,
});

export default rootReducer;