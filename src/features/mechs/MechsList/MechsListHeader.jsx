import React from "react";

import {Table} from "semantic-ui-react";


const MechsListHeader = () => (
    <Table.Header>
        <Table.Row>
            <Table.HeaderCell width={1}>
                IDs
            </Table.HeaderCell>
            <Table.HeaderCell width={5}>
                Name
            </Table.HeaderCell>
            <Table.HeaderCell width={3}>
                Model
            </Table.HeaderCell>
            <Table.HeaderCell width={3}>
                Weight (tons)
            </Table.HeaderCell>
            <Table.HeaderCell width={2}>
                Class
            </Table.HeaderCell>

        </Table.Row>
    </Table.Header>
);

export default MechsListHeader;