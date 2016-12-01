import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Form,
    Dropdown,
    Segment,
    Grid,
} from "semantic-ui-react";

import {selectUnitInfo} from "../unitInfoSelectors";

const FACTIONS = [
    {value : "cc", text : "Capellan Confederation"},
    {value : "dc", text : "Draconis Combine"},
    {value : "elh", text : "Eridani Light Horse"},
    {value : "fs", text : "Federated Suns"},
    {value : "fwl", text : "Free Worlds League"},
    {value : "hr", text : "Hansen's Roughriders"},
    {value : "lc", text : "Lyran Commonwealth"},
    {value : "wd", text : "Wolf's Dragoons"},
];

const mapState = (state) => ({
    unitInfo : selectUnitInfo(state),
});

class UnitInfo extends Component {
    render() {
        const {unitInfo} = this.props;
        const {name, affiliation} = unitInfo;

        return (
            <Segment attached="bottom">
                <Grid width={16}>
                    <Grid.Column width={6}>
                        <Form size="large">
                            <Form.Field name="name">
                                <label>Unit Name</label>
                                <input placeholder="Name" value={name}/>
                            </Form.Field>
                            <Form.Field name="affiliation">
                                <label>Affiliation</label>
                                <Dropdown
                                    selection
                                    options={FACTIONS}
                                    value={affiliation}
                                />
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}


export default connect(mapState)(UnitInfo);