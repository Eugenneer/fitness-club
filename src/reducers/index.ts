import {
	SET_MODE
} from '../actions/actionTypes';
import { MODES } from '../constants';

const initialState: any = {
	mode: MODES.DAILYLIST,
	logIn: 'ADMIN'
  }
  
export default (state = initialState, action) => {
	console.log('Action', action)
	console.log('State', state)
	switch (action.type) {
		case SET_MODE: {
			return {
				...state,
				mode: action.mode
			}
		}
		default:
			console.log('State is returned')
			return state
	}
};