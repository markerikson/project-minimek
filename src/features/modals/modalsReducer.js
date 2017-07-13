import {
    MODAL_CLOSE,
    MODAL_OPEN
} from "./modalsConstants";

import {createReducer} from "common/utils/reducerUtils";


const initialState = null;

export function openModal(state, payload) {
    return payload.newModalDescription;
}

export function closeModal(state, payload) {
    return null;
}


export default createReducer(initialState,  {
    [MODAL_OPEN] : openModal,
    [MODAL_CLOSE] : closeModal
});