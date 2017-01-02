import React from "react";
import {connect} from "react-redux";
import {Form} from "semantic-ui-react";

import schema from "app/schema";

import {getWeightClass, selectCurrentMech} from "../mechSelectors";


const mapState = (state) => {
    let mech;

    const currentMech = selectCurrentMech(state);

    const session = schema.from(state.entities);
    const {Mech} = session;

    if(Mech.hasId(currentMech)) {
        const mechModel = Mech.withId(currentMech);

        mech = {
            // Copy the data from the plain JS object
            ...mechModel.ref,
            // Provide a default empty object for the relation
            mechType : {},
        };

        if(mechModel.type) {
            // Replace the default object with a copy of the relation's data
            mech.mechType = {...mechModel.type.ref};
        }
    }

    return {mech}
}

const MechDetails = ({mech={}}) => {
    const {
        id = "",
        type = "",
        mechType = {},
    } = mech;

    const {
        name = "",
        weight = "",
    } = mechType;


    const weightClass = getWeightClass(weight);

    return (
        <Form size="large">
            <Form.Field name="id" width={6} >
                <label>ID</label>
                <input
                    placeholder="ID"
                    value={id}
                    disabled={true}
                />
            </Form.Field>
            <Form.Field name="name" width={16} >
                <label>Name</label>
                <input
                    placeholder="Name"
                    value={name}
                    disabled={true}
                />
            </Form.Field>
            <Form.Field name="model" width={6} >
                <label>Model</label>
                <input
                    placeholder="Model"
                    value={type}
                    disabled={true}
                />
            </Form.Field>
            <Form.Field name="weight" width={6} >
                <label>Weight</label>
                <input
                    value={weight}
                    disabled={true}
                />
            </Form.Field>
            <Form.Field name="class" width={6} >
                <label>Class</label>
                <input
                    value={weightClass}
                    disabled={true}
                />
            </Form.Field>
        </Form>
    );
}

export default connect(mapState)(MechDetails);
