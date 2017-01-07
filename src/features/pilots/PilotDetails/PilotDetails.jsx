import React from "react";
import {connect} from "react-redux";
import {Form, Dropdown, Grid, Button} from "semantic-ui-react";

import schema from "app/schema";

import {selectCurrentPilot, selectIsEditingPilot} from "../pilotsSelectors";

import {
    startEditingPilot,
    stopEditingPilot,
} from "../pilotsActions";


const RANKS = [
    {value: "Private", text : "Private"},
    {value: "Corporal", text : "Corporal"},
    {value: "Sergeant", text : "Sergeant"},
    {value: "Lieutenant", text : "Lieutenant"},
    {value: "Captain", text : "Captain"},
    {value: "Major", text : "Major"},
    {value: "Colonel", text : "Colonel"},
];

const MECHS = [
    {value : "WHM-6R", text : "Warhammer WHM-6R"}
];

const mapState = (state) => {
    let pilot;
    
    const currentPilot = selectCurrentPilot(state);
    
    const session = schema.from(state.entities);
    const {Pilot} = session;
    
    if(Pilot.hasId(currentPilot)) {
        pilot = Pilot.withId(currentPilot).ref;
    }

    const pilotIsSelected = Boolean(currentPilot);
    const isEditingPilot = selectIsEditingPilot(state);


    return {pilot, pilotIsSelected, isEditingPilot}
}


const actions = {
    startEditingPilot,
    stopEditingPilot,
}

const PilotDetails = ({pilot={}, pilotIsSelected = false, isEditingPilot = false, ...actions }) =>{
    const {
        name = "",
        rank = "",
        age = "",
        gunnery = "",
        piloting = "",
        mechType = "",
    } = pilot;

    const canStartEditing = pilotIsSelected && !isEditingPilot;
    const canStopEditing = pilotIsSelected && isEditingPilot;

    return (
        <Form size="large">
            <Form.Field name="name" width={16}>
                <label>Name</label>
                <input
                    placeholder="Name"
                    value={name}
                    disabled={!canStopEditing}
                />
            </Form.Field>
            <Form.Field name="rank" width={16}>
                <label>Rank</label>
                <Dropdown
                    fluid
                    selection
                    options={RANKS}
                    value={rank}
                    disabled={!canStopEditing}
                />
            </Form.Field>
            <Form.Field name="age" width={6}>
                <label>Age</label>
                <input
                    placeholder="Age"
                    value={age}
                    disabled={!canStopEditing}
                />
            </Form.Field>
            <Form.Field name="gunnery" width={6}>
                <label>Gunnery</label>
                <input
                    value={gunnery}
                    disabled={!canStopEditing}
                />
            </Form.Field>
            <Form.Field name="piloting" width={6}>
                <label>Piloting</label>
                <input
                    value={piloting}
                    disabled={!canStopEditing}
                />
            </Form.Field>
            <Form.Field name="mech" width={16}>
                <label>Mech</label>
                <Dropdown
                    fluid
                    selection
                    options={MECHS}
                    value={mechType}
                    disabled={true}
                />
            </Form.Field>
            <Grid.Row width={16}>
                <Button
                    primary
                    disabled={!canStartEditing}
                    type="button"
                    onClick={actions.startEditingPilot}
                >
                    Start Editing
                </Button>
                <Button
                    secondary
                    disabled={!canStopEditing}
                    type="button"
                    onClick={actions.stopEditingPilot}
                >
                    Stop Editing
                </Button>
            </Grid.Row>
        </Form>
    );
}

export default connect(mapState, actions)(PilotDetails);
