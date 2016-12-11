import React from "react";
import {Form, Dropdown} from "semantic-ui-react";

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

const PilotDetails = ({pilot={}}) =>{
    const {
        name = "",
        rank = "",
        age = "",
        gunnery = "",
        piloting = "",
        mechType = "",
    } = pilot;

    return (
        <Form size="large">
            <Form.Field name="name" width={16}>
                <label>Name</label>
                <input
                    placeholder="Name"
                    value={name}
                />
            </Form.Field>
            <Form.Field name="rank" width={16}>
                <label>Rank</label>
                <Dropdown
                    fluid
                    selection
                    options={RANKS}
                    value={rank}
                />
            </Form.Field>
            <Form.Field name="age" width={6}>
                <label>Age</label>
                <input
                    placeholder="Age"
                    value={age}
                />
            </Form.Field>
            <Form.Field name="gunnery" width={6}>
                <label>Gunnery</label>
                <input
                    value={gunnery}
                />
            </Form.Field>
            <Form.Field name="piloting" width={6}>
                <label>Piloting</label>
                <input
                    value={piloting}
                />
            </Form.Field>
            <Form.Field name="mech" width={16}>
                <label>Mech</label>
                <Dropdown
                    fluid
                    selection
                    options={MECHS}
                    value={mechType}
                />
            </Form.Field>
        </Form>
    );
}

export default PilotDetails;