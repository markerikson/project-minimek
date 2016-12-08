import {combineReducers} from "redux";

import entitiesReducer from "./entitiesReducer";
import tabReducer from "features/tabs/tabReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";
import pilotsReducer from "features/pilots/pilotsReducer";


const rootReducer = combineReducers({
    entities : entitiesReducer,
    unitInfo : unitInfoReducer,
    pilots : pilotsReducer,
    tabs : tabReducer,
});

export default rootReducer;