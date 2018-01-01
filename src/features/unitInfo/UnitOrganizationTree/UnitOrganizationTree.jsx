import React from "react";

import {
    List,
} from "semantic-ui-react";

import Lance from "./Lance";

const UnitOrganizationTree = () => {
    return (
        <List size="large">
            <List.Item>
                <List.Icon name="cubes" />
                <List.Content>
                    <List.Header>Black Widow Company</List.Header>
                    <List.List>
                        <Lance lanceID={1} />
                        <Lance lanceID={2} />
                        <Lance lanceID={3} />
                    </List.List>
                </List.Content>
            </List.Item>
        </List>
    )
}

export default UnitOrganizationTree;