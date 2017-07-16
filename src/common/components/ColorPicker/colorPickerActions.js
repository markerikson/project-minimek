import {
    openModal
} from "features/modals/modalsActions";

export function showColorPicker(initialColor) {
    return openModal("ColorPickerDialog", {color : initialColor});
}