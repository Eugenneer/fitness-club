import React from 'react';
import { Component } from 'react';
import { Header, Container, Content } from 'native-base';
import AppFooter from './containers/AppFooterContainer';
import AppDailyList from './components/AppDailyList';
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
                    React.createElement(AppDailyList, null)),
                React.createElement(AppFooter, null))));
    }
}
//# sourceMappingURL=App.js.map