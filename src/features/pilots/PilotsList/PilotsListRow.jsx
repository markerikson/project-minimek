import React from "react";
import {connect} from "react-redux";
import {
    Table,
    Button,
    Icon,
} from "semantic-ui-react";
import _ from "lodash";

import {getEntitiesSession} from "features/entities/entitySelectors";
import {deleteEntity} from "features/entities/entityActions";


const mapState = (state, ownProps) => {
    const session = getEntitiesSession(state);
    const {Pilot} = session;

    let pilot;

    if(Pilot.hasId(ownProps.pilotID)) {
        const pilotModel = Pilot.withId(ownProps.pilotID);

        // Access the underlying plain JS object using the "ref" field,
        // and make a shallow copy of it
        pilot = {
            ...pilotModel.ref
        };

        // We want to look up pilotModel.mech.mechType.  Just in case the
        // relational fields are null, we'll do a couple safety checks as we go.

        // Look up the associated Mech instance using the foreign-key
        // field that we defined in the Pilot Model class
        const {mech} = pilotModel;

        // If there actually is an associated mech, include the
        // mech type's ID as a field in the data passed to the component
        if(mech && mech.type) {
            pilot.mechType = mech.type.id;
        }
    }

    return {pilot};
}

const actions = {
    deleteEntity,
};


const PilotsListRow = ({pilot={}, onPilotClicked=_.noop, selected, deleteEntity}) => {
    const {
        id = null,
        name = "",
        rank = "",
        age = "",
        gunnery = "",
        piloting = "",
        mechType = "",
    } = pilot;

    const onDeleteClicked = (e) => {
        e.stopPropagation();
        e.preventDefault();
        deleteEntity("Pilot", id);
    }

    const onRowClicked = () => onPilotClicked(id);


    return (
        <Table.Row onClick={onRowClicked} active={selected}>
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

            <Table.Cell>
                <Button
                    compact
                    basic
                    circular
                    size="tiny"
                    color="red"
                    icon={<Icon  name="delete" />}
                    onClick={onDeleteClicked}
                >
                </Button>
            </Table.Cell>
        </Table.Row>
    );
}

export default connect(mapState, actions)(PilotsListRow);
