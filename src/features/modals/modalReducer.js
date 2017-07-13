import {
    MODAL_CLOSE,
    MODAL_OPEN
} from "./modalConstants";

import {createReducer} from "common/utils/reducerUtils";


const initialState = null;

export function openModal(state, payload) {
    const {modalType, modalProps} = payload;
    return {modalType, modalProps};
}

export function closeModal(state, payload) {
    return null;
}


export default createReducer(initialState,  {
    [MODAL_OPEN] : openModal,
    [MODAL_CLOSE] : closeModal
});