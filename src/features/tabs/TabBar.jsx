import React from "react";
import {Menu} from "semantic-ui-react";

import Tab from "./Tab";

const TabBar = (props) => {
    const {tabs, currentTab, onTabClick, ...otherProps} = props;

    const tabItems = tabs.map(tabInfo => {
        const {name, label} = tabInfo;

        return (
            <Tab
                key={name}
                name={name}
                label={label}
                active={currentTab === name}
                onClick={onTabClick}
            />
        );
    });

    return (
        <div>
            <Menu tabular attached="top" {...otherProps}>
                {tabItems}
            </Menu>
        </div>
    )
}

export default TabBar;
