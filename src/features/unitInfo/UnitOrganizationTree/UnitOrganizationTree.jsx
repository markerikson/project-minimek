import React from "react";

import {
    List,
} from "semantic-ui-react";

import LancePilot from "./LancePilot";


const UnitOrganizationTree = () => {
    return (
        <List size="large">
            <List.Item>
                <List.Icon name="cubes" />
                <List.Content>
                    <List.Header>Black Widow Company</List.Header>
                    <List.List>
                        <List.Item>
                            <List.Icon name="cube" />
                            <List.Content>
                                <List.Header>Command Lance</List.Header>
                                <List.List>
                                    <LancePilot pilotID={1} />
                                    <LancePilot pilotID={2} />
                                    <LancePilot pilotID={3} />
                                    <LancePilot pilotID={4} />
                                </List.List>
                            </List.Content>
                        </List.Item>

                        <List.Item>
                            <List.Icon name="cube" />
                            <List.Content>
                                <List.Header>Fire Lance</List.Header>
                                <List.List>
                                    <LancePilot pilotID={5} />
                                    <LancePilot pilotID={6} />
                                    <LancePilot pilotID={7} />
                                    <LancePilot pilotID={8} />
                                </List.List>
                            </List.Content>
                        </List.Item>

                        <List.Item>
                            <List.Icon name="cube" />
                            <List.Content>
                                <List.Header>Recon Lance</List.Header>
                                <List.List>
                                    <LancePilot pilotID={9} />
                                    <LancePilot pilotID={10} />
                                    <LancePilot pilotID={11} />
                                    <LancePilot pilotID={12} />
                                </List.List>
                            </List.Content>
                        </List.Item>
                    </List.List>
                </List.Content>
            </List.Item>
        </List>
    )
}

export default UnitOrganizationTree;