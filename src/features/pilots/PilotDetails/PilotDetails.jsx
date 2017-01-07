import React, {Component} from "react";
import {connect} from "react-redux";
import {Form, Dropdown, Grid, Button} from "semantic-ui-react";

import schema from "app/schema";

import {selectCurrentPilot, selectIsEditingPilot} from "../pilotsSelectors";

import {
    startEditingPilot,
    stopEditingPilot,
} from "../pilotsActions";

import {updateEntity} from "features/entities/entityActions";

import {getValueFromEvent} from "common/utils/clientUtils";


const RANKS = [
    {value: "Private", text : "Private"},
    {value: "Corporal", text : "Corporal"},
    {value: "Sergeant", text : "Sergeant"},
    {value: "Lieutenant", text : "Lieutenant"},
    {value: "Captain", text : "Captain"},
    {value: "Major", text : "Major"},
    {value: "Colonel", text : "Colonel"},
];

const SKILL_VALUES = [
    {value : 0, text : 0},
    {value : 1, text : 1},
    {value : 2, text : 2},
    {value : 3, text : 3},
    {value : 4, text : 4},
    {value : 5, text : 5},
    {value : 6, text : 6},
    {value : 7, text : 7},
    {value : 8, text : 8},
]

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
    updateEntity,
}


export class PilotDetails  extends Component {
    onNameChanged = (e) => {
        const newValues = getValueFromEvent(e);
        const {id} = this.props.pilot;

        this.props.updateEntity("Pilot", id, newValues);
    }

    onRankChanged = (e, result) => {
        const newValues = {rank : result.value};
        const {id} = this.props.pilot;

        this.props.updateEntity("Pilot", id, newValues);
    }


    render() {
        const {pilot={}, pilotIsSelected = false, isEditingPilot = false, ...actions } = this.props;

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
                <Form.Field
                    name="name"
                    label="Name"
                    width={16}
                    placeholder="Name"
                    value={name}
                    disabled={!canStopEditing}
                    onChange={this.onNameChanged}
                    control="input"
                />
                <Form.Field
                    name="rank"
                    label="Rank"
                    width={16}
                    control={Dropdown}
                    fluid
                    selection
                    options={RANKS}
                    value={rank}
                    onChange={this.onRankChanged}
                    disabled={!canStopEditing}
                />
                <Form.Field
                    name="age"
                    width={6}
                    label="Age"
                    placeholder="Age"
                    control="input"
                    value={age}
                    disabled={!canStopEditing}
                />
                <Form.Field
                    name="gunnery"
                    label="Gunnery"
                    width={6}
                    control={Dropdown}
                    fluid
                    selection
                    options={SKILL_VALUES}
                    value={gunnery}
                    disabled={!canStopEditing}
                />
                <Form.Field
                    name="piloting"
                    label="Piloting"
                    width={6}
                    control={Dropdown}
                    fluid
                    selection
                    options={SKILL_VALUES}
                    value={piloting}
                    disabled={!canStopEditing}
                />
                <Form.Field
                    name="mech"
                    label="Mech"
                    width={16}
                    control={Dropdown}
                    fluid
                    selection
                    options={MECHS}
                    value={mechType}
                    disabled={true}
                />
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
}


export default connect(mapState, actions)(PilotDetails);
