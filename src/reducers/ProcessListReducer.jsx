const initialState = {
    processList: []
}

const TypeProcessReducer = (state = initialState, action) => ( { ...state, processList: action.processList });

export default TypeProcessReducer;