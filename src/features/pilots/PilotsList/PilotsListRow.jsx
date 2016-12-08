import React from "react";
import {Table} from "semantic-ui-react";
import _ from "lodash";

const PilotsListRow = ({pilot={}, onPilotClicked=_.noop, selected}) => {
    const {
        id = null,
        name = "",
        rank = "",
        age = "",
        gunnery = "",
        piloting = "",
        mechType = "",
    } = pilot;

    return (
        <Table.Row onClick={() => onPilotClicked(id)} active={selected}>
            <Table.Cell>
                {name}
            </Table.Cell>
            <Table.Cell>
                {rank}
            </Table.Cell>
            <Table.Cell>
                {age}
            </Table.Cell>
            <Table.Cell>
                {gunnery}/{piloting}
            </Table.Cell>
            <Table.Cell>
                {mechType}
            </Table.Cell>
        </Table.Row>
    );
}

export default PilotsListRow;
