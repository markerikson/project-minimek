import React from "react";
import {Table} from "semantic-ui-react";

import {getWeightClass} from "../mechSelectors";


const MechsListRow = ({mech={}}) => {
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
        <Table.Row>
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


export default MechsListRow;
