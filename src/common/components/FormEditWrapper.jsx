import React, {Component, PropTypes} from "react";

import {noop, debounce, defaults, values} from "lodash";

import {getValueFromEvent} from "common/utils/clientUtils";

class FormEditWrapper extends Component {
    static propTypes = {
        value : PropTypes.object.isRequired,
        isEditing : PropTypes.bool,
        onChange : PropTypes.func,
        valuePropName : PropTypes.string,
        onChangePropName : PropTypes.string,
        singleValue : PropTypes.bool,
        passIsEditing : PropTypes.bool,
    }
    
    static defaultProps = {
        isEditing : true,
        onChange : noop,
        valuePropName : "value",
        onChangePropName : "onChange",
        singleValue : false,
        passIsEditing : true,
    }

    constructor(props) {
        super(props);
        const boundDispatchAttributes = this.dispatchAttributeChange.bind(this);
        this.dispatchAttributeChange = debounce(boundDispatchAttributes, 250);

        this.state = {
            value : {},
        };
    }

    componentWillReceiveProps() {
        // Reset any component-local changes  Note that the incoming props
        // SHOULD match the changes we just had in local state.
        this.setState({value : {}});
    }

    onChildChange = (e) => {
        const {isEditing} = this.props;

        if(isEditing) {
            const newValues = getValueFromEvent(e);

            if(newValues) {
                const change = {
                    ...this.state.value,
                    ...newValues
                };

                // Update our component-local state with these changes, so that the child components
                // will re-render with the new values right away
                this.setState({value : change});

                // Because this is debounced, we will only update the app WIP/editing state
                // once there is a pause in changes (like letting go of a held-down key)
                this.dispatchAttributeChange(change);
            }
        }
    }

    dispatchAttributeChange(change) {
        this.props.onChange(change);
    }

    render() {
        const {value : propsValue, children} = this.props;
        const {isEditing, passIsEditing, valuePropName, onChangePropName, singleValue} = this.props;
        const {value : stateValue = {}} = this.state;

        // Use incoming values from props IF there is no corresponding value
        // in local component state.  This allows local changes to win out.
        const currentValues = defaults({}, stateValue, propsValue);

        let valueToPassDown = currentValues;

        if(singleValue) {
            valueToPassDown = values(currentValues)[0];
        }

        const editingValue = passIsEditing ? {isEditing} : {};

        // Force the child form to re-render itself with these values
        const child = React.Children.only(children);

        const updatedChild = React.cloneElement(child, {
            [valuePropName] : valueToPassDown,
            [onChangePropName] : this.onChildChange,
            ...editingValue
        });

        return updatedChild;
    }
}

export default FormEditWrapper;
