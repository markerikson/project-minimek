import React, {Component} from "react";

import {
    Grid,
    Segment,
    Header,
} from "semantic-ui-react";

import MechsList from "../MechsList";
import MechDetails from "../MechDetails";


export default class Mechs extends Component {
    render() {
        return (
            <Segment>
                <Grid>
                    <Grid.Column width={10}>
                        <Header as="h3">Mechs List</Header>
                        <MechsList />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as="h3">Mech Details</Header>
                        <Segment >
                            <MechDetails />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}
