import processType from '../constants/processType';

const initialState = {
    processType: processType.IO
}

const TypeProcessReducer = (state = initialState, action) => {
	switch (action.type) {
		case processType.IO:
			return { ...state, processType: processType.IO};

		case processType.CPU:
			return { ...state, processType: processType.CPU };
		default:
			return state;
	}
};

export default TypeProcessReducer;