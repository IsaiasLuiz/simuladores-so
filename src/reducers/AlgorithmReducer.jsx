import algorithms from '../constants/algorithms';

const initialState = {
	algorithm: algorithms.ROUND_ROBIN
};

const algorithmReducer = (state = initialState, action) => {
	switch (action.type) {
		case algorithms.ROUND_ROBIN:
			return { ...state, algorithm: algorithms.ROUND_ROBIN };

		case algorithms.QUEUES:
			return { ...state, algorithm: algorithms.QUEUES };

		case algorithms.A_PRIORITY:
			return { ...state, algorithm: algorithms.A_PRIORITY };
		default:
			return state;
	}
};

export default algorithmReducer;
