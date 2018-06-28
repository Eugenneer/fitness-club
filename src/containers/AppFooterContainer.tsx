import React from 'react';
import AppFooter from '../components/AppFooter.js';
import {connect} from 'react-redux';
import {setMode} from '../actions/actions';
const mapStateToProps = (state: any) => ({
	mode: state.mode
});
const mapDispatchToProps = (dispatch: any) => ({
	setMode(mode: any) {
		dispatch(setMode(mode));
	}
});
const AppFooterContainer = ({mode, setMode}) => (
	<AppFooter mode={mode} setMode={setMode} />
);
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppFooterContainer);