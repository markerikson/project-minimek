import React from "react";
import {connect} from "react-redux";

import {
    Grid,
    Segment,
    Header,
    List,
} from "semantic-ui-react";

import {getEntitiesSession} from "features/entities/entitySelectors";

import Lance from "./Lance";

const mapState = (state) => {
    const session = getEntitiesSession(state);
    const {Unit, Lance} = session;

    let unit;

    const unitModel = Unit.all().first();

    if(unitModel) {
        unit = unitModel.ref;
    }

    let lances = Lance.all().toRefArray().map(lance => lance.id);

    return {unit, lances};
}

const UNKNOWN_UNIT = {name : "Unknown"};

const UnitOrganization = ({unit = UNKNOWN_UNIT, lances = []}) => {
    const {name} = unit;

    const lanceEntries = lances.map(lanceID => <Lance key={lanceID} lanceID={lanceID} />);

    return (
        <Segment>
            <Grid>
                <Grid.Column width={10}>
                    <Header as="h3">Unit Table of Organization</Header>
                    <List size="large">
                        <List.Item>
                            <List.Icon name="cubes" />
                            <List.Content>
                                <List.Header>{name}</List.Header>
                                <List.List>
                                    {lanceEntries}
                                </List.List>
                            </List.Content>
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default connect(mapState)(UnitOrganization);