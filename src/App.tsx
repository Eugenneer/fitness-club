import React from 'react'
import { Component } from 'react';
import { Header, Container, Content} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import AppFooter from './containers/AppFooterContainer';
import DayPlan from './components/DayPlan';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import {MODES} from './constants';
import styles from './styles'
const initialState: any = {
  modes: MODES.DAILYLIST,
  logIn: 'ADMIN'
}
const store = createStore(reducers, initialState);
console.log(store.getState())
interface Props {
}
interface State {
}
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
            <Header />
            <Content scrollEnabled={true}>
              <DayPlan day = 'Понедельник' />
              <DayPlan day = 'Вторник' />
            </Content>
            <AppFooter/>
        </Container>
      </Provider> 
   );
  }
}