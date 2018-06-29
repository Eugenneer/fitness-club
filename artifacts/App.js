import React from 'react';
import { Component } from 'react';
import { Header, Container, Content } from 'native-base';
import AppFooter from './containers/AppFooterContainer';
import DayPlan from './components/DayPlan';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { MODES } from './constants';
const initialState = {
    modes: MODES.DAILYLIST,
    logIn: 'ADMIN'
};
const store = createStore(reducers, initialState);
console.log(store.getState());
export default class App extends Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(Container, null,
                React.createElement(Header, null),
                React.createElement(Content, { scrollEnabled: true },
                    React.createElement(DayPlan, { day: '\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A' }),
                    React.createElement(DayPlan, { day: '\u0412\u0442\u043E\u0440\u043D\u0438\u043A' })),
                React.createElement(AppFooter, null))));
    }
}
//# sourceMappingURL=App.js.map