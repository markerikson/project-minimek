import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Form,
    Dropdown,
} from "semantic-ui-react";

import {showColorPicker} from "common/components/ColorPicker/colorPickerActions";
import {getValueFromEvent} from "common/utils/clientUtils";

import FormEditWrapper from "common/components/FormEditWrapper";
import ColorPickerButton from "common/components/ColorPicker/ColorPickerButton";

import {getEntitiesSession} from "features/entities/entitySelectors";

import {selectUnitInfo} from "../unitInfoSelectors";
import {updateUnitInfo, setUnitColor} from "../unitInfoActions";



const mapState = (state) => {
    const session = getEntitiesSession(state);
    const {Faction} = session;

    const factions = Faction.all().toRefArray();

    const unitInfo = selectUnitInfo(state);

    return {
        factions,
        unitInfo,
    };
};

const actions = {
    updateUnitInfo,
    showColorPicker,
};

class UnitInfoForm extends Component {

    onAffiliationChanged = (e, result) => {
        const {name, value} = result;

        const newValues = { [name] : value};
        this.props.updateUnitInfo(newValues);
    }

    onNameChanged = (e) => {
        const newValues = getValueFromEvent(e);
        this.props.updateUnitInfo(newValues);
    }

    onColorClicked = () => {
        const onColorPickedAction = setUnitColor();

        this.props.showColorPicker(this.props.unitInfo.color, onColorPickedAction);
    }


    render() {
        const {unitInfo, updateUnitInfo, factions} = this.props;
        const {name, affiliation, color} = unitInfo;

        const displayFactions = factions.map(faction => {
            return {
                value : faction.id,
                text : faction.name
            };
        });

        return (
            <Form size="large">

                <Form.Field name="name">
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
                <Form.Group>
                    <Form.Field name="affiliation" width={12}>
                        <label>Affiliation</label>
                        <Dropdown
                            name="affiliation"
                            selection
                            options={displayFactions}
                            value={affiliation}
                            onChange={this.onAffiliationChanged}
                        />
                    </Form.Field>
                    <Form.Field name="color">
                        <label>Color</label>
                        <ColorPickerButton
                            value={color}
                            onClick={this.onColorClicked}
                        />
                    </Form.Field>
                </Form.Group>

            </Form>
        );
    }
}


export default connect(mapState, actions)(UnitInfoForm);