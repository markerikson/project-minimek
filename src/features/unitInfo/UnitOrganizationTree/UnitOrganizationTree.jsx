import React from "react";
import {connect} from "react-redux";

import {
    List,
} from "semantic-ui-react";

import {getEntitiesSession} from "features/entities/entitySelectors";

import Lance from "./Lance";

const mapState = (state) => {
    const session = getEntitiesSession(state);
    const {Unit} = session;

    let lances;

    const unitModel = Unit.all().first();

    if(unitModel) {
        lances = unitModel.lances.toRefArray().map(lance => lance.id);
    }

    return {lances};
}

const UnitOrganizationTree = ({lances = []}) => {
    const lanceEntries = lances.map(lanceID => <Lance key={lanceID} lanceID={lanceID} />);

    return (
        <List size="large">
            <List.Item>
                <List.Icon name="cubes" />
                <List.Content>
                    <List.Header>Black Widow Company</List.Header>
                    <List.List>
                        {lanceEntries}
                    </List.List>
                </List.Content>
            </List.Item>
        </List>
    )
}

export default connect(mapState)(UnitOrganizationTree);