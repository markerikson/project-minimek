import React, { Component } from 'react'
import {connect} from "react-redux";
import { Menu } from 'semantic-ui-react'

import {selectPilot} from "../pilotsActions";
import {deleteEntity} from "features/entities/entityActions";
import {hideContextMenu} from "features/contextMenus/contextMenuActions";

const actions = {
    selectPilot,
    deleteEntity,
    hideContextMenu,
}

export class PilotsListItemMenu extends Component {
    onSelectClicked = () => {
        this.props.selectPilot(this.props.pilotId);
        this.props.hideContextMenu();
    }

    onDeleteClicked = () => {
        this.props.deleteEntity("Pilot", this.props.pilotId);
        this.props.hideContextMenu();
    }

    render() {
        return (
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>Pilot: {this.props.text} </Menu.Header>

                    <Menu.Menu>
                        <Menu.Item onClick={this.onSelectClicked}>Select Pilot</Menu.Item>
                        <Menu.Item onClick={this.onDeleteClicked}>Delete Pilot</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}


export default connect(null, actions)(PilotsListItemMenu);