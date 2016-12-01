import React, {Component} from "react";
import {connect} from "react-redux";

import {
    Grid,
    Segment,
    Header,
} from "semantic-ui-react";


import PilotsList from "../PilotsList";
import PilotDetails from "../PilotDetails";



const pilots = [
    {
        name : "Natasha Kerensky",
        rank : "Captain",
        age : 52,
        gunnery : 2,
        piloting : 3,
        mechType : "WHM-6R",
    }
];

export class Pilots extends Component {
    state = {
        pilots : pilots,
    }

    render() {
        const {pilots} = this.state;

        const currentPilot = pilots[0] || {};

        return (
            <Segment>
                <Grid>
                    <Grid.Column width={10}>
                        <Header as="h3">Pilot List</Header>
                        <PilotsList pilots={pilots} />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as="h3">Pilot Details</Header>
                        <Segment >
                            <PilotDetails {...currentPilot} />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default connect()(Pilots);