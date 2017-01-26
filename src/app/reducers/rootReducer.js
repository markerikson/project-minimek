import {combineReducers} from "redux";

import {reduceReducers} from "common/utils/reducerUtils";

import entitiesReducer from "./entitiesReducer";
import editingEntitiesReducer from "./editingEntitiesReducer";
import tabReducer from "features/tabs/tabReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";
import pilotsReducer from "features/pilots/pilotsReducer";
import mechsReducer from "features/mechs/mechsReducer";

import entityCrudReducer from "features/entities/entityReducer";
import editingFeatureReducer from "features/editing/editingReducer";


const combinedReducer = combineReducers({
    entities : entitiesReducer,
    editingEntities : editingEntitiesReducer,
    unitInfo : unitInfoReducer,
    pilots : pilotsReducer,
    mechs : mechsReducer,
    tabs : tabReducer,
});


const rootReducer = reduceReducers(
    combinedReducer,
    entityCrudReducer,
    editingFeatureReducer,
);

export default rootReducer;