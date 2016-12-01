import React, {Component} from "react";

import {
    Grid,
    Segment,
    Header,
} from "semantic-ui-react";

import MechsList from "../MechsList";
import MechDetails from "../MechDetails";

const mechs = [
    {
        id : 1,
        name : "Warhammer",
        type : "WHM-6R",
        weight : 70,
    }
];

class Mechs extends Component {
    state = {
        mechs : mechs,
    }

    render() {
        const {mechs} = this.state;

        const currentMech = mechs[0] || {};

        return (
            <Segment>
                <Grid>
                    <Grid.Column width={10}>
                        <Header as="h3">Mechs List</Header>
                        <MechsList mechs={mechs}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Header as="h3">Mech Details</Header>
                        <Segment >
                            <MechDetails {...currentMech}/>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}
export default Mechs;