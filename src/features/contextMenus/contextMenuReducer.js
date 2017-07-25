import {createReducer} from "common/utils/reducerUtils";

import {
    CONTEXT_MENU_SHOW,
    CONTEXT_MENU_HIDE,
} from "./contextMenuConstants";


const contextMenuInitialState = {
    show : false,
    location : {
        x : null,
        y : null,
    },
    type : null,
    menuArgs : undefined,
}

function showContextMenu(state, payload) {
    return {
        ...state,
        show : true,
        ...payload
    };
}

function hideContextMenu(state, payload) {
    return {
        ...contextMenuInitialState
    }
};

export default createReducer(contextMenuInitialState, {
    [CONTEXT_MENU_SHOW] : showContextMenu,
    [CONTEXT_MENU_HIDE] : hideContextMenu
});