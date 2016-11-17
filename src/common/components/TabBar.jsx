import React, {Component} from "react";

import {Menu} from "semantic-ui-react";
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

const TabBar = (props) => {
    const {tabs, currentTab, onTabClick, ...otherProps} = props;

    const tabItems = tabs.map(tabInfo => {
        const {name, label} = tabInfo;

        return (
            <Tab
                name={name}
                label={label}
                active={currentTab === name}
                onClick={onTabClick}
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
            <Menu tabular attached="top" {...otherProps}>
                {tabItems}
            </Menu>

            {tabPanels}
        </div>
    )
}

export default TabBar;