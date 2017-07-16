import React, {Component} from "react";
import {connect} from "react-redux";

import TestModal from "./TestModal";
import ColorPickerDialog from "common/components/ColorPickerDialog";

const modalComponentLookupTable = {
    ColorPickerDialog,
    TestModal,
};

const mapState = (state) => ({currentModals : state.modals});


export class ModalManager extends Component {
    render() {
        const {currentModals} = this.props;


        const renderedModals = currentModals.map( (modalDescription, index) => {
            const {modalType, modalProps = {}} = modalDescription;
            const ModalComponent = modalComponentLookupTable[modalType];

            let renderedModal = <ModalComponent {...modalProps}  key={modalType + index}/>;
            return renderedModal;
        });


        return <span>{renderedModals}</span>
    }
}

export default connect(mapState)(ModalManager);