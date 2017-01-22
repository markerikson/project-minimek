import {createSelector} from "reselect";

import schema from "app/schema";

export const selectEntities = state => state.entities;

export const getEntitiesSession = createSelector(
    selectEntities,
    entities => schema.from(entities)
);