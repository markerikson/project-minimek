import {
    MODAL_CLOSE,
    MODAL_OPEN
} from "./modalsConstants";

export function openModal(modalType, modalProps) {
    return {
        type : MODAL_OPEN,
        payload : {
            newModalDescription : {modalType, modalProps}
        }
    };
}

export function closeModal() {
    return {
        type : MODAL_CLOSE
    };
}