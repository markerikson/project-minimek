import {createSelector} from "reselect";

import {getEntitiesSession} from "features/entities/entitySelectors";

export const selectUnitInfo = state => state.unitInfo;


export const selectCurrentUnitInfo = createSelector(
    getEntitiesSession,
    (session) => {
        const {Unit} = session;
        const currentUnitModel = Unit.all().first();

        let currentUnitInfo = null;

        if(currentUnitModel) {
            currentUnitInfo = currentUnitModel.ref;
        }

        return currentUnitInfo;
    }
)