import { SET_DATA, SET_STATE } from '../actions/actiontype';
import { getData } from '../../helpers/localStorage';

const initial = {
	appstate: getData('data') || [],
	data: {},
};

export const bmistatereducer = (state = initial,action) => {
	switch (action.type) {
		case SET_STATE:
			return {
				...state,
				appstate: action.payload,
			};
		case SET_DATA: {
			return {
				...state,
				data: action.payload,
			};
		}
		default:
			return state;
	}
};

export default bmistatereducer;
