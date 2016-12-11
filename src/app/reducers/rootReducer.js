import {combineReducers} from "redux";

import entitiesReducer from "./entitiesReducer";
import tabReducer from "features/tabs/tabReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";


const rootReducer = combineReducers({
    entities : entitiesReducer,
    unitInfo : unitInfoReducer,
    tabs : tabReducer,
});

export default rootReducer;