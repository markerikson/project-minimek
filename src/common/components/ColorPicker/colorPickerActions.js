import _ from "lodash";

import {
    openModal
} from "features/modals/modalActions";

export function showColorPicker(initialColor, onColorPickedAction) {
    // Define props that we want to "pass" to the ColorPicker dialog,
    // including the body of the action that should be dispatched when
    // the dialog is actually used to select a color.
    const colorPickerProps = {
        color : initialColor,
        onColorPicked : onColorPickedAction
    };
    return openModal("ColorPickerDialog", colorPickerProps);
}

export function colorSelected(color, actionToDispatch) {
    return (dispatch) => {
        if(actionToDispatch) {
            const newAction = _.cloneDeep(actionToDispatch);
            newAction.payload.color = color;

            dispatch(newAction);
        }
    }
}