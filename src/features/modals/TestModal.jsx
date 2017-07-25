import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Modal,
    Button,
} from "semantic-ui-react";

import {openModal, closeModal} from "features/modals/modalActions";

const actions = {openModal, closeModal};

export class TestModal extends Component {

    onNextModalClick = () => {
        const {counter} = this.props;

        this.props.openModal("TestModal", {counter : counter + 1});
    }

    render() {
        const {counter, closeModal} = this.props;

        return (
            <Modal
                closeIcon="close"
                open={true}
                onClose={closeModal}
            >
                <Modal.Header>Modal #{counter}</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <h4>
                            Value from props:
                        </h4>
                        <div>
                            counter = {counter}
                        </div>
                        <div>
                            <Button onClick={this.onNextModalClick}>Add Another Modal</Button>
                        </div>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
        )
    }
}


export default connect(null, actions)(TestModal);
