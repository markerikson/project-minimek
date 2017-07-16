import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class TestContextMenu extends Component {
    render() {
        return (
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>Menu Header: {this.props.text} </Menu.Header>

                    <Menu.Menu>
                        <Menu.Item>First Menu Item</Menu.Item>
                        <Menu.Item>Second Menu Item</Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}
