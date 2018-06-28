import React from 'react';
import { Component } from 'react';
import { SwipeRow, View, Text, Icon, Button, Item, Input, ListItem, List } from 'native-base';
import styles from '../styles';
const NONE = 'none';
const FLEX = 'flex';
export default class SwipeRowExample extends Component {
    constructor(props) {
        super(props);
        this.onDisplay = () => {
            console.log('onDisplay');
            console.log(this.state.dataS);
            this.setState({
                inputTextDisplay: FLEX
            });
        };
        this.onAccept = () => {
            console.log('onAccept');
            let newData = this.state.dataS ? this.state.dataS : [];
            newData.push(this.state.inputText);
            this.setState({
                dataS: newData,
                inputTextDisplay: NONE,
                inputText: ''
            });
            console.log(this.state.dataS);
        };
        this.state = {
            inputText: '',
            inputTextDisplay: NONE,
            dataS: ['1111', '2222'],
            selectedHours: 0,
            selectedMinutes: 0,
        };
        console.log(this.state.dataS);
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(SwipeRow, { leftOpenValue: 75, left: React.createElement(Button, { success: true, onPress: this.onDisplay },
                    React.createElement(Icon, { active: true, name: "add" })), body: React.createElement(View, null,
                    React.createElement(Text, { style: styles.itemHeaderStyle }, "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A")) }),
            React.createElement(List, null, this.state.dataS.map((item, i) => (React.createElement(ListItem, { key: i },
                React.createElement(Text, null, item))))),
            React.createElement(Item, { rounded: true, style: { display: this.state.inputTextDisplay } },
                React.createElement(View, { style: { flexDirection: 'row' } },
                    React.createElement(Input, { placeholder: '\u0412\u0440\u0435\u043C\u044F \u0438 \u043D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435', style: { marginLeft: 10 }, onChangeText: (inputText) => this.setState({ inputText }) }),
                    React.createElement(Icon, { name: 'checkmark-circle', onPress: this.onAccept })))));
    }
}
//# sourceMappingURL=AppDailyList.js.map