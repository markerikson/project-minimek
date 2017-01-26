import React, {Component} from "react";
import {connect} from "react-redux";
import {Form, Dropdown, Grid, Button} from "semantic-ui-react";

import {getEntitiesSession} from "features/entities/entitySelectors";
import {getEditingEntitiesSession} from "features/editing/editingSelectors";

import FormEditWrapper from "common/components/FormEditWrapper";

import {selectCurrentPilot, selectIsEditingPilot} from "../pilotsSelectors";

import {
    startEditingPilot,
    stopEditingPilot,
    cancelEditingPilot,
} from "../pilotsActions";

import {
    resetEditedItem,
} from "features/editing/editingActions";

import {editItemAttributes} from "features/editing/editingActions";

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

    const pilotIsSelected = Boolean(currentPilot);
    const isEditingPilot = selectIsEditingPilot(state);

    if(pilotIsSelected) {
        const session = isEditingPilot ?
            getEditingEntitiesSession(state) :
            getEntitiesSession(state);

        const {Pilot} = session;

        if(Pilot.hasId(currentPilot)) {
            pilot = Pilot.withId(currentPilot).ref;
        }
    }
    return {pilot, pilotIsSelected, isEditingPilot}
}


const actions = {
    startEditingPilot,
    stopEditingPilot,
    editItemAttributes,
    resetEditedItem,
    cancelEditingPilot,
}


export class PilotDetails  extends Component {
    onInputChanged = (e) => {
        const newValues = getValueFromEvent(e);
        const {id} = this.props.pilot;

        this.props.editItemAttributes("Pilot", id, newValues);
    }

    onDropdownChanged = (e, result) => {
        const {name, value} = result;
        const newValues = { [name] : value};
        const {id} = this.props.pilot;

        this.props.editItemAttributes("Pilot", id, newValues);
    }

    onStartEditingClicked = () => {
        const {id} = this.props.pilot;
        this.props.startEditingPilot();
    }

    onStopEditingClicked = () => {
        const {id} = this.props.pilot;
        this.props.stopEditingPilot();
    }

    onResetClicked = () => {
        const {id} = this.props.pilot;
        this.props.resetEditedItem("Pilot", id);
    }


    render() {
        const {pilot={}, pilotIsSelected = false, isEditingPilot = false } = this.props;

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

        const buttonWidth = 140;

        return (
            <Form size="large">
                <FormEditWrapper
                    singleValue={true}
                    value={ {name} }
                    onChange={this.onInputChanged}
                    passIsEditing={false}
                >
                    <Form.Field
                        name="name"
                        label="Name"
                        width={16}
                        placeholder="Name"
                        disabled={!canStopEditing}
                        control="input"
                    />
                </FormEditWrapper>
                <Form.Field
                    name="rank"
                    label="Rank"
                    width={16}
                    control={Dropdown}
                    fluid
                    selection
                    options={RANKS}
                    value={rank}
                    onChange={this.onDropdownChanged}
                    disabled={!canStopEditing}
                />
                <FormEditWrapper
                    singleValue={true}
                    value={ {age} }
                    onChange={this.onInputChanged}
                    passIsEditing={false}
                >
                    <Form.Field
                        name="age"
                        width={6}
                        label="Age"
                        placeholder="Age"
                        control="input"
                        disabled={!canStopEditing}
                    />
                </FormEditWrapper>
                <Form.Field
                    name="gunnery"
                    label="Gunnery"
                    width={6}
                    control={Dropdown}
                    fluid
                    selection
                    options={SKILL_VALUES}
                    value={gunnery}
                    onChange={this.onDropdownChanged}
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
                    onChange={this.onDropdownChanged}
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
                        onClick={this.onStartEditingClicked}
                        style={{width : buttonWidth, marginRight : 10}}
                    >
                        Start Editing
                    </Button>
                    <Button
                        secondary
                        disabled={!canStopEditing}
                        type="button"
                        style={{width : buttonWidth}}
                        onClick={this.onStopEditingClicked}
                    >
                        Save Edits
                    </Button>
                </Grid.Row>
                <Grid.Row width={16}>
                    <Button
                        disabled={!canStopEditing}
                        type="button"
                        onClick={this.onResetClicked}
                        style={{width : buttonWidth, marginRight : 10}}
                    >
                        Reset Values
                    </Button>
                    <Button
                        negative
                        disabled={!canStopEditing}
                        type="button"
                        style={{width : buttonWidth}}
                        onClick={this.props.cancelEditingPilot}
                    >
                        Cancel Edits
                    </Button>
                </Grid.Row>
            </Form>
        );
    }
}


export default connect(mapState, actions)(PilotDetails);
