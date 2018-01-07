import React from "react";
import {connect} from "react-redux";

import {
    List,
} from "semantic-ui-react";

import {getEntitiesSession} from "features/entities/entitySelectors";

import Lance from "./Lance";

const mapState = (state) => {
    const session = getEntitiesSession(state);
    const {Unit, Lance} = session;

    let unit, faction;

    const unitModel = Unit.all().first();

    if(unitModel) {
        unit = unitModel.ref;
        faction = unitModel.affiliation.ref;
    }

    let lances = Lance.all().toRefArray().map(lance => lance.id);

    return {unit, faction, lances};
}

const UNKNOWN_UNIT = {name : "Unknown"};

const UnitOrganizationTree = ({unit = UNKNOWN_UNIT, faction = {}, lances = []}) => {
    const {name, color = "white"} = unit;
    const {name : factionName} = faction;

    const lanceEntries = lances.map(lanceID => <Lance key={lanceID} lanceID={lanceID} />);

    const colorBlock = <div
        style={{
            marginLeft : 10,
            backgroundColor : color,
            border : "1px solid black",
            height : 20,
            width : 40,
        }}
    />;

    const displayText = factionName ? `${name} / ${factionName}` : name;

    return (
        <List size="large">
            <List.Item>
                <List.Icon name="cubes" />
                <List.Content>
                    <List.Header style={{display : "flex"}}>{displayText} {colorBlock}</List.Header>
                    <List.List>
                        {lanceEntries}
                    </List.List>
                </List.Content>
            </List.Item>
        </List>
    );
}

export default connect(mapState)(UnitOrganizationTree);