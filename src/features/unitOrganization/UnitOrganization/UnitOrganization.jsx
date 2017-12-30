import React from "react";

import {
    Grid,
    Segment,
    Header,
    List,
} from "semantic-ui-react";

import Lance from "./Lance";

const UnitOrganization = () => {
    return (
        <Segment>
            <Grid>
                <Grid.Column width={10}>
                    <Header as="h3">Unit Table of Organization</Header>
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
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default UnitOrganization;