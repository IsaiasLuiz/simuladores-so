import algorithms from '../constants/algorithms';

const initialState = {
	algorithm: 'initial',
	obj: {
		test: {
			item: 'test 1 item'
		},
		test2: { item: 'test 2 item' }
	}
};

const algorithmReducer = (state = initialState, action) => {
	switch (action.type) {
		case algorithms.ROUND_ROBIN:
			return { ...state, algorithm: 'algorithm reducer' };

		default:
			return state;
	}
};

export default algorithmReducer;


// import algorithms from '../constants/algorithms';

// const initialState = {
// 	algorithm: algorithms.ROUND_ROBIN
// };

// const algorithmReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case algorithms.ROUND_ROBIN:
// 			return { ...state, algorithm: algorithms.ROUND_ROBIN };

// 		case algorithms.QUEUES:
// 			return { ...state, algorithm: algorithms.QUEUES };

// 		case algorithms.A_PRIORITY:
// 			return { ...state, algorithm: algorithms.A_PRIORITY };
// 		default:
// 			return state;
// 	}
// };

// export default algorithmReducer;
