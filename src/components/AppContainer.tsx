import React from 'react';
import { Text } from 'react-native'
import AppFooter from '../components/AppFooter.js';
import {connect} from 'react-redux';
import {setMode} from '../actions/actions';
import { Component } from 'react';
import { MODES } from '../constants';
import WeakList from './WeakList';
import AppNavigation from '../components/AppNavigation';

interface Props extends StateFromProps, DispatchFromProps {}
interface State {}

class AppContainer extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
		console.log(props)
	}
	
	render() {
		console.log('AppContainerMode', this.props.mode)
		return (
            this.props.mode === MODES.DAILYLIST ?
              <WeakList/>
            :
              <AppNavigation/>
        )
	}
}

interface StateFromProps {
	mode: any
}

interface DispatchFromProps {
}

const mapStateToProps = (state: any) => ({
	mode: state.mode
});

const mapDispatchToProps = (dispatch: any) : DispatchFromProps => ({
});


export let AppContainerRedux = connect<StateFromProps, DispatchFromProps>(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);