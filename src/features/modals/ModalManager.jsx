import React, {Component} from "react";
import {connect} from "react-redux";

import TestModal from "./TestModal";

const modalComponentLookupTable = {
    TestModal
};

const mapState = (state) => ({currentModals : state.modals});


export class ModalManager extends Component {
    render() {
        const {currentModals} = this.props;


        const renderedModals = currentModals.map( (modalDescription, index) => {
            const {modalType, modalProps = {}} = modalDescription;
            const ModalComponent = modalComponentLookupTable[modalType];

            return <ModalComponent {...modalProps}  key={modalType + index}/>;

        });


        return <span>{renderedModals}</span>
    }
}

export default connect(mapState)(ModalManager);