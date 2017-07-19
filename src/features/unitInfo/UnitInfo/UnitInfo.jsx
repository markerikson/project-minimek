import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Form,
    Dropdown,
    Segment
} from "semantic-ui-react";

import {selectUnitInfo} from "../unitInfoSelectors";
import {updateUnitInfo} from "../unitInfoActions";
import {getValueFromEvent} from "common/utils/clientUtils";

import FormEditWrapper from "common/components/FormEditWrapper";
import ColorPickerButton from "common/components/ColorPickerButton";

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

const actions = {
    updateUnitInfo,
};

class UnitInfo extends Component {

    onAffiliationChanged = (e, result) => {
        const {name, value} = result;

        const newValues = { [name] : value};
        this.props.updateUnitInfo(newValues);
    }

    onNameChanged = (e) => {
        const newValues = getValueFromEvent(e);
        this.props.updateUnitInfo(newValues);
    }


    render() {
        const {unitInfo, updateUnitInfo} = this.props;
        const {name, affiliation, color} = unitInfo;

        return (
            <Segment attached="bottom">
                <Form size="large">
                    <Form.Field name="name" width={6}>
                        <label>Unit Name</label>
                        <FormEditWrapper
                            singleValue={true}
                            value={ {name} }
                            onChange={updateUnitInfo}
                            passIsEditing={false}
                        >
                            <input
                                placeholder="Name"
                                name="name"
                            />
                        </FormEditWrapper>
                    </Form.Field>
                    <Form.Field name="affiliation" width={6}>
                        <label>Affiliation</label>
                        <Dropdown
                            name="affiliation"
                            selection
                            options={FACTIONS}
                            value={affiliation}
                            onChange={this.onAffiliationChanged}
                        />
                    </Form.Field>
                    <Form.Field name="color">
                        <label>Color</label>
                        <ColorPickerButton value={color} />
                    </Form.Field>
                </Form>
            </Segment>
        );
    }
}


export default connect(mapState, actions)(UnitInfo);