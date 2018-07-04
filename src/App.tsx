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
import {AppContainerRedux} from './components/AppContainer';

const initialState: any = {
  mode: MODES.DAILYLIST,
  logIn: 'ADMIN'
}
const store = createStore(reducers, initialState);

interface Props {
}

interface State {
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }
  
  render() {
    console.log('Store', store.getState())
    return (
        <Provider store={store}>
          <Container>
              <AppContainerRedux/>
            <AppFooterContainer/>
          </Container>
        </Provider> 
   );
  }
}