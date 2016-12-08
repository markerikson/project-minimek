import React from "react";
import {Table} from "semantic-ui-react";
import _ from "lodash";

const PilotsListRow = ({pilot={}, onPilotClicked=_.noop, selected}) => (
    <Table.Row onClick={() => onPilotClicked(pilot.id)} active={selected}>
        <Table.Cell>
            {pilot.name}
        </Table.Cell>
        <Table.Cell>
            {pilot.rank}
        </Table.Cell>
        <Table.Cell>
            {pilot.age}
        </Table.Cell>
        <Table.Cell>
            {pilot.gunnery}/{pilot.piloting}
        </Table.Cell>
        <Table.Cell>
            {pilot.mechType}
        </Table.Cell>
    </Table.Row>
);

export default PilotsListRow;