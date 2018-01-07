import React, {Component} from "react";
import {
    Segment,
    Grid,
    Header,
} from "semantic-ui-react";

import UnitOrganizationTree from "../UnitOrganizationTree/UnitOrganizationTree";
import UnitInfoForm from "./UnitInfoForm";


class UnitInfo extends Component {

    render() {
        return (
            <Segment>
                <Grid>
                    <Grid.Column width={10}>
                        <Header as="h3">Unit Table of Organization</Header>
                        <Segment>
                            <UnitOrganizationTree />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as="h3">Edit Unit</Header>
                        <Segment>
                            <UnitInfoForm />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}


export default UnitInfo;