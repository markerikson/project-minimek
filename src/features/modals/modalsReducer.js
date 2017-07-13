import {
    MODAL_CLOSE,
    MODAL_OPEN
} from "./modalsConstants";

import {createReducer} from "common/utils/reducerUtils";


const initialState = [];


export function openModal(state, payload) {
    // Always pushing a new modal onto the stack
    return state.concat(payload.newModalDescription);
}

export function closeModal(state, payload) {
    // Always popping the last modal off the stack;
    const newState = state.slice();
    newState.pop();
    return newState;
}


export default createReducer(initialState,  {
    [MODAL_OPEN] : openModal,
    [MODAL_CLOSE] : closeModal
});