import {
    openModal
} from "features/modals/modalActions";

export function showColorPicker(initialColor) {
    return openModal("ColorPickerDialog", {color : initialColor});
}