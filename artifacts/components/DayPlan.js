import React from 'react';
import { Component } from 'react';
import { SwipeRow, View, Text, Icon, Button, Item, Input, ListItem, List } from 'native-base';
import styles from '../styles';
const NONE = 'none';
const FLEX = 'flex';
export default class DayPlan extends Component {
    constructor(props) {
        super(props);
        this.onDisplay = () => {
            this.setState({
                inputTextDisplay: FLEX
            });
        };
        this.setRow = () => {
            let newData = this.state.dataS ? this.state.dataS : [];
            let obj = {
                hh: +this.state.selectedHours,
                mm: +this.state.selectedMinutes,
                name: this.state.inputText,
                description: ''
            };
            newData.push(obj);
            newData.sort((a, b) => { return (a.hh * 100 + a.mm) - (b.hh * 100 + b.mm); });
            this.setState({
                dataS: newData,
                inputTextDisplay: NONE,
                inputText: '',
                selectedHours: '',
                selectedMinutes: ''
            });
            console.log(this.state.dataS);
        };
        this.state = {
            inputText: '',
            inputTextDisplay: NONE,
            dataS: [],
            selectedHours: '0',
            selectedMinutes: '0',
        };
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(SwipeRow, { leftOpenValue: 75, left: React.createElement(Button, { success: true, onPress: this.onDisplay },
                    React.createElement(Icon, { active: true, name: "add" })), body: React.createElement(View, null,
                    React.createElement(Text, { style: styles.itemHeaderStyle }, this.props.day)) }),
            React.createElement(List, null, this.state.dataS.map((item, i) => (React.createElement(ListItem, { key: i },
                React.createElement(Text, null, item.hh + ' : ' + item.mm + ' - ' + item.name))))),
            React.createElement(View, { style: { flexDirection: "row", justifyContent: 'space-between', display: this.state.inputTextDisplay } },
                React.createElement(Item, { style: styles.hourStyle },
                    React.createElement(Input, { placeholder: 'hh', onChangeText: (selectedHours) => this.setState({ selectedHours }) })),
                React.createElement(Item, { style: styles.minutStyle },
                    React.createElement(Input, { placeholder: 'mm', onChangeText: (selectedMinutes) => this.setState({ selectedMinutes }) })),
                React.createElement(Item, { style: styles.inputStyle },
                    React.createElement(Input, { placeholder: '\u0412\u0440\u0435\u043C\u044F \u0438 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435', onChangeText: (inputText) => this.setState({ inputText }) }))),
            React.createElement(Button, { primary: true, onPress: this.setRow, style: { display: this.state.inputTextDisplay, margin: 1 } },
                React.createElement(Text, null, " Accept "))));
    }
}
//# sourceMappingURL=DayPlan.js.map