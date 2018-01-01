import React, {Component} from "react";
import {connect} from "react-redux";
import {Portal} from 'react-portal';

import ContextMenu from "./ContextMenu";

import TestContextMenu from "./TestContextMenu";
import PilotsListItemMenu from "features/pilots/PilotsList/PilotsListItemMenu";

import {selectContextMenu} from "./contextMenuSelectors";

const menuTypes = {
    TestContextMenu,
    PilotsListItemMenu
};


export function contextMenuManagerMapState(state) {
    return {
        contextMenu : selectContextMenu(state)
    };
}


export class ContextMenuManager extends Component {

    render() {
        const {contextMenu} = this.props;
        const {show, location, type, menuArgs = {}} = contextMenu;

        let menu = null;

        if(show) {
            let MenuComponent = menuTypes[type];

            if(MenuComponent) {
                menu = (
                    <Portal isOpened={true}>
                        <ContextMenu location={location}>
                            <MenuComponent {...menuArgs} />
                        </ContextMenu>
                    </Portal>
                )
            }
        }

        return menu;
    }
}

export default connect(contextMenuManagerMapState)(ContextMenuManager);