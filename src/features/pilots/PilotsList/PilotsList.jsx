import React, {Component} from "react";
import {Table} from "semantic-ui-react";

import PilotsListHeader from "./PilotsListHeader";
import PilotsListRow from "./PilotsListRow";


export default class PilotsList extends Component {
    render() {
        const {pilots} = this.props;

        const pilotRows = pilots.map(pilot => (
            <PilotsListRow {...pilot} key={pilot.name}/>
        ));
        
        return (
            <Table celled>
                <PilotsListHeader />
                <Table.Body>
                    {pilotRows}
                </Table.Body>
            </Table>
        )
    }
}

