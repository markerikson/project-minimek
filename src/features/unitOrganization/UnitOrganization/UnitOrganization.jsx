import React from "react";

import {
    Grid,
    Segment,
    Header,
    List,
} from "semantic-ui-react";

import UnitOrganizationTree from "../UnitOrganizationTree";


const UnitOrganization = () => {
    return (
        <Segment>
            <Grid>
                <Grid.Column width={10}>
                    <Header as="h3">Unit Table of Organization</Header>
                    <Segment>
                        <UnitOrganizationTree />
                    </Segment>

                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default UnitOrganization