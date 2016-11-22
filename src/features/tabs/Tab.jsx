import React from "react";
import {Menu} from "semantic-ui-react";

const Tab = ({name, label, onClick, active}) => (
    <Menu.Item
        name={name}
        content={label}
        active={active}
        onClick={() => onClick(name)}
    />
);

export default Tab;