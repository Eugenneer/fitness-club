import React from 'react'
import { Component } from 'react';
import { Header, Container, Content} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import AppFooterContainer from './containers/AppFooterContainer';
import WeakList from './components/WeakList';
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
interface Props {
}
interface State {
}
export default class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Content>
            <Header/>
            <WeakList/>
          </Content>  
          <AppFooterContainer/>
        </Container>
      </Provider> 
   );
  }
}