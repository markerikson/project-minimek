import React from "react";
import {connect} from "react-redux";
import {Table} from "semantic-ui-react";

import {getWeightClass} from "../mechSelectors";


import schema from "app/schema";

const mapState = (state, ownProps) => {
    const session = schema.from(state.entities);
    const {Mech} = session;

    let mech;

    if(Mech.hasId(ownProps.mechID)) {
        const mechModel = Mech.withId(ownProps.mechID);

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

    return {mech};
}


const MechsListRow = ({mech = {}, onMechClicked, selected}) => {
    const {
        id = null,
        type = "",
        mechType = {},
    } = mech;

    const {
        name = "",
        weight = "",
    } = mechType;

    const weightClass = getWeightClass(weight);

    return (
        <Table.Row onClick={() => onMechClicked(id)} active={selected}>
            <Table.Cell>
                {id}
            </Table.Cell>
            <Table.Cell>
                {name}
            </Table.Cell>
            <Table.Cell>
                {type}
            </Table.Cell>
            <Table.Cell>
                {weight}
            </Table.Cell>
            <Table.Cell>
                {weightClass}
            </Table.Cell>
        </Table.Row>
    );
}


export default connect(mapState)(MechsListRow);
