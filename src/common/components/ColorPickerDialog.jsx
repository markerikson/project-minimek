import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Modal,
    Button,
} from "semantic-ui-react";

import {SketchPicker} from "react-color";

import {closeModal} from "features/modals/modalActions";
import {noop} from "common/utils/clientUtils";

const actions = {closeModal};

export class ColorPickerDialog extends Component {
    constructor(props) {
        super();
        this.state = {
            color : props.color
        }
    }

    onSelectClicked = () => {
        this.props.colorSelected(this.state.color);

        this.props.closeModal();
    }

    onSelectedColorChanged = (colorEvent) => {
        this.setState({color : colorEvent.hex});
    }

    render() {
        const {closeModal} = this.props;

        return (
            <Modal
                closeIcon="close"
                open={true}
                onClose={closeModal}
                size="small"
            >
                <Modal.Header>Select Color</Modal.Header>
                <Modal.Content>
                    <SketchPicker
                        color={this.state.color}
                        onChangeComplete={this.onSelectedColorChanged}
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button positive onClick={this.onSelectClicked}>Select</Button>
                    <Button secondary onClick={closeModal}>Cancel</Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

ColorPickerDialog.defaultProps = {
    color : "red",
    colorSelected : noop
};


export default connect(null, actions)(ColorPickerDialog);