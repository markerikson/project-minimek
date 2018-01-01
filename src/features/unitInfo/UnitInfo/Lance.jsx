import React from "react";
import {connect} from "react-redux";

import {
    List,
} from "semantic-ui-react";

import {getEntitiesSession} from "features/entities/entitySelectors";

import LancePilot from "./LancePilot";


const mapState = (state, ownProps) => {
    const session = getEntitiesSession(state);
    const {Lance} = session;

    let lance, pilots;

    if(Lance.hasId(ownProps.lanceID)) {
        const lanceModel = Lance.withId(ownProps.lanceID);

        lance = lanceModel.ref;
        pilots = lanceModel.pilots.toRefArray().map(pilot => pilot.id);
    }

    return {lance, pilots};
};

const UNKNOWN_LANCE =  {name : "Unknown"}

const Lance = ({lance = UNKNOWN_LANCE, pilots = []}) => {
    const {name} = lance;

    const lancePilots = pilots.map(pilotID => <LancePilot key={pilotID} pilotID={pilotID} />);

    return (
        <List.Item>
            <List.Icon name="cube" />
            <List.Content>
                <List.Header>{name}</List.Header>
                <List.List>
                    {lancePilots}
                </List.List>
            </List.Content>
        </List.Item>
    )
};


export default connect(mapState)(Lance);