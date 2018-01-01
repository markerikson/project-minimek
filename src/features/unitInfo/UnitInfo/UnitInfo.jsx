import React, {Component} from "react";
import {
    Segment
} from "semantic-ui-react";

import UnitInfoForm from "./UnitInfoForm";

class UnitInfo extends Component {

    render() {
        return (
            <Segment attached="bottom">
                <UnitInfoForm />
            </Segment>
        );
    }
}


export default UnitInfo;