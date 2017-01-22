import React, {Component} from "react";
import {connect} from "react-redux";
import {Table} from "semantic-ui-react";

import PilotsListHeader from "./PilotsListHeader";
import PilotsListRow from "./PilotsListRow";

import {getEntitiesSession} from "features/entities/entitySelectors";

import {selectPilot} from "../pilotsActions";
import {selectCurrentPilot} from "../pilotsSelectors";


const mapState = (state) => {
    // Create a Redux-ORM Session from our "entities" slice, which
    // contains the "tables" for each model type
    const session = getEntitiesSession(state);

    // Retrieve the model class that we need.  Each Session
    // specifically "binds" model classes to itself, so that
    // updates to model instances are applied to that session.
    // These "bound classes" are available as fields in the sesssion.
    const {Pilot} = session;

    // Query the session for all Pilot instances.
    // The QuerySet that is returned from all() can be used to
    // retrieve instances of the Pilot class, or retrieve the
    // plain JS objects that are actually in the store.

    // The withModels modifier will let us map over Model instances
    // for each entry, rather than the plain JS objects.

    // Extract a list of IDs for each Pilot entry
    const pilots = Pilot.all().withModels.map(pilotModel => pilotModel.getId());

    const currentPilot = selectCurrentPilot(state);

    // Return the list of pilot IDs and the current pilot ID as props
    return {pilots, currentPilot};
}

// Make an object full of action creators that can be passed to connect
// and bound up, instead of writing a separate mapDispatch function
const actions = {
    selectPilot,
};


export class PilotsList extends Component {
    render() {
        const {pilots = [], selectPilot, currentPilot} = this.props;

        const pilotRows = pilots.map(pilotID => (
            <PilotsListRow
                pilotID={pilotID}
                key={pilotID}
                onPilotClicked={selectPilot}
                selected={pilotID === currentPilot}
            />
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

export default connect(mapState, actions)(PilotsList);
