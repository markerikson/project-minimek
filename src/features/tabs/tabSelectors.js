import {createSelector} from "reselect";

export const selectTabs = state => state.tabs;

export const selectCurrentTab = createSelector(
    selectTabs,
    tabs => tabs.currentTab
);