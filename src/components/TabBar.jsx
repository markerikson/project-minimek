import React, {Component} from "react";

import {Menu, Container} from "semantic-ui-react";
import ToggleDisplay from 'react-toggle-display';


const Tab = ({name, label, onClick, active}) => (
    <Menu.Item
        key={name}
        name={name}
        content={label}
        active={active}
        onClick={() => onClick(name)}
    />
)

export default class TabBar extends Component {
    constructor(props) {
        super(props);

        const {tabs = [{name : null}]} = props;

        const firstTab = tabs[0];

        this.state = {
            currentTab : firstTab.name
        } ;
    }

    onTabClick = (name) => {
        this.setState({currentTab : name});
    }

    render() {
        const {tabs, ...otherProps} = this.props;
        const {currentTab} = this.state;

        const tabItems = tabs.map(tabInfo => {
            const {name, label} = tabInfo;

            return (
                <Tab
                    name={name}
                    label={label}
                    active={currentTab === name}
                    onClick={this.onTabClick}
                />
            );
        });

        const tabPanels = tabs.map(tabInfo => {
            const {name, component : TabComponent} = tabInfo;

            return (
                <ToggleDisplay show={name === currentTab}>
                    <TabComponent key={name} />
                </ToggleDisplay>
            )
        })

        return (
            <div>
                <Menu tabular attached {...otherProps}>
                    {tabItems}
                </Menu>

                {tabPanels}
            </div>
        )
    }
}