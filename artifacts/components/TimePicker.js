import React from 'react';
import { Component } from 'react';
import { Picker, View, StyleSheet, } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    picker: {
        flex: 1,
    },
});
const MAX_HOURS = 24;
const MAX_MINUTES = 60;
export default class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.getHoursItems = () => {
            const items = [];
            const { hoursUnit } = this.props;
            for (let i = 0; i <= MAX_HOURS; i++) {
                items.push(React.createElement(Picker.Item, { key: i, value: i, label: `${i.toString()}${hoursUnit}` }));
            }
            return items;
        };
        this.getMinutesImtes = () => {
            const items = [];
            const { minutesUnit } = this.props;
            for (let i = 0; i <= MAX_MINUTES; i++) {
                items.push(React.createElement(Picker.Item, { key: i, value: i, label: `${i.toString()}${minutesUnit}` }));
            }
            return items;
        };
        this.handleChangeHours = (itemValue) => {
            const { onChange } = this.props;
            this.setState({
                selectedHours: itemValue,
            }, () => {
                const { selectedHours, selectedMinutes } = this.state;
                onChange(selectedHours, selectedMinutes);
            });
        };
        this.handleChangeMinutes = (itemValue) => {
            const { onChange } = this.props;
            this.setState({
                selectedMinutes: itemValue,
            }, () => {
                const { selectedHours, selectedMinutes } = this.state;
                onChange(selectedHours, selectedMinutes);
            });
        };
        const { selectedHours, selectedMinutes } = props;
        this.state = {
            selectedHours,
            selectedMinutes,
        };
    }
    render() {
        const { selectedHours, selectedMinutes } = this.state;
        return (React.createElement(View, { style: styles.container },
            React.createElement(Picker, { style: styles.picker, selectedValue: selectedHours, onValueChange: (itemValue) => this.handleChangeHours(itemValue) }, this.getHoursItems()),
            React.createElement(Picker, { style: styles.picker, selectedValue: selectedMinutes, onValueChange: (itemValue) => this.handleChangeMinutes(itemValue) }, this.getMinutesImtes())));
    }
}
TimePicker.defaultProps = {
    selectedHours: 0,
    selectedMinutes: 0,
    onChange: null,
    hoursUnit: '',
    minutesUnit: '',
};
//# sourceMappingURL=TimePicker.js.map