import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Modal,
    Icon,
} from "semantic-ui-react";

import {closeModal} from "features/modals/modalsActions";

const actions = {closeModal};

export class TestModal extends Component {
    render() {

        return (
            <Modal
                closeIcon="close"
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>Modal #1</Modal.Header>
                <Modal.Content image>
                    <div className='image'>
                        <Icon name='right arrow' />
                    </div>
                    <Modal.Description>
                        <p>We have more to share with you. Follow us along to modal 2</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
        )
    }
}


export default connect(null, actions)(TestModal);