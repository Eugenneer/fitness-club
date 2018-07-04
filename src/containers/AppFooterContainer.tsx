import React from 'react';
import AppFooter from '../components/AppFooter';
import {connect} from 'react-redux';
import {setMode} from '../actions/actions';

interface Props extends StateFromProps, DispatchFromProps {}
interface State {}

class AppFooterContainer extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props)
	}
	
	render() {
		console.log('Mode', this.props.mode)
		return (
			<AppFooter mode={this.props.mode} setMode={this.props.setMode} />
		)
	}
}

interface StateFromProps {
	mode: any
}

interface DispatchFromProps {
    setMode(mode: any): void,
}

const mapStateToProps = (state: any) => ({
	mode: state.mode
});

const mapDispatchToProps = (dispatch: any) : DispatchFromProps => ({
	setMode(mode: any) {
		dispatch(setMode(mode));
	}
});


export default connect<StateFromProps, DispatchFromProps>(
	mapStateToProps,
	mapDispatchToProps
)(AppFooterContainer);