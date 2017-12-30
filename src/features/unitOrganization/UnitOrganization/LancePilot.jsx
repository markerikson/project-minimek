import React from "react";
import {connect} from "react-redux";

import {
    List,
} from "semantic-ui-react";

import {getEntitiesSession} from "features/entities/entitySelectors";


const mapState = (state, ownProps) => {
    const session = getEntitiesSession(state);
    const {Pilot, Mech} = session;

    let pilot, mech;

    if(Pilot.hasId(ownProps.pilotID)) {
        const pilotModel = Pilot.withId(ownProps.pilotID);

        pilot = pilotModel.ref;

        if(pilotModel.mech) {
            mech = pilotModel.mech.type.ref;
        }
    }

    return {pilot, mech};
};

const UNKNOWN_PILOT =  {name : "Unknown", rank : ""}
const UNKNOWN_MECH = {id : "N/A", name : ""};

const LancePilot = ({pilot = UNKNOWN_PILOT, mech = UNKNOWN_MECH}) => {
    const {name, rank} = pilot;
    const {id : mechModel, name : mechName} = mech;

    return (
        <List.Item>
            <List.Icon name="user" />
            <List.Content>
                <List.Header>{rank} {name} - {mechModel} {mechName}</List.Header>
            </List.Content>
        </List.Item>
    )
};


export default connect(mapState)(LancePilot);