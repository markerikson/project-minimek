import {CONTEXT_MENU_HIDE, CONTEXT_MENU_SHOW} from "./contextMenuConstants";


export function showContextMenu(x, y, type, menuArgs) {
    return {
        type : CONTEXT_MENU_SHOW,
        payload : {
            location : {
                x,
                y
            },
            type,
            menuArgs
        }
    }
}

export function hideContextMenu() {
    return {
        type : CONTEXT_MENU_HIDE
    }
}
