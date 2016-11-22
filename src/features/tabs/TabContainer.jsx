import {connect} from "react-redux";

import TabBar from "common/components/TabBar";

import {selectCurrentTab} from "./tabSelectors";
import {selectTab} from "./tabActions";

const mapState = (state) => {
    const currentTab = selectCurrentTab(state);
    
    return {currentTab};
}

const actions = {onTabClick : selectTab};

export default connect(mapState, actions)(TabBar);