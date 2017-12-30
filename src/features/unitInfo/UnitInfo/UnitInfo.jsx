import React, {Component} from "react";
import {connect} from "react-redux";
import {
    Form,
    Dropdown,
    Segment
} from "semantic-ui-react";

import {selectCurrentUnitInfo} from "../unitInfoSelectors";
import {updateUnitInfo, setUnitColor} from "../unitInfoActions";
import {showColorPicker} from "common/components/ColorPicker/colorPickerActions";
import {getValueFromEvent} from "common/utils/clientUtils";

import FormEditWrapper from "common/components/FormEditWrapper";
import ColorPickerButton from "common/components/ColorPicker/ColorPickerButton";

import {getEntitiesSession} from "features/entities/entitySelectors";


const mapState = (state) => {
    const session = getEntitiesSession(state);
    const {Faction} = session;

    const factions = Faction.all().toRefArray();

    const unitInfo = selectCurrentUnitInfo(state);

    return {
        factions,
        unitInfo,
    };

};

const actions = {
    updateUnitInfo,
    showColorPicker,
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

    onColorClicked = () => {
        const onColorPickedAction = setUnitColor();

        this.props.showColorPicker(this.props.unitInfo.color, onColorPickedAction);
    }


    render() {
        const {unitInfo, factions} = this.props;

        const isDisplayingUnit = Boolean(unitInfo);
        let name, affiliation, color;

        if(isDisplayingUnit) {
            ({name, affiliation, color} = unitInfo);
        }

        const displayFactions = factions.map(faction => {
            return {
                value : faction.id,
                text : faction.name
            };
        });

        return (
            <Segment attached="bottom">
                <Form size="large">
                    <Form.Field name="name" width={6}>
                        <label>Unit Name</label>
                        <FormEditWrapper
                            singleValue={true}
                            value={ {name} }
                            onChange={this.onNameChanged}
                            passIsEditing={false}
                        >
                            <input
                                placeholder="Name"
                                name="name"
                                disabled={!isDisplayingUnit}
                            />
                        </FormEditWrapper>
                    </Form.Field>
                    <Form.Field name="affiliation" width={6}>
                        <label>Affiliation</label>
                        <Dropdown
                            name="affiliation"
                            selection
                            options={displayFactions}
                            value={affiliation}
                            disabled={!isDisplayingUnit}
                            onChange={this.onAffiliationChanged}
                        />
                    </Form.Field>
                    <Form.Field name="color">
                        <label>Color</label>
                        <ColorPickerButton
                            value={color}
                            disabled={!isDisplayingUnit}
                            onClick={this.onColorClicked}
                        />
                    </Form.Field>
                </Form>
            </Segment>
        );
    }
}


export default connect(mapState, actions)(UnitInfo);