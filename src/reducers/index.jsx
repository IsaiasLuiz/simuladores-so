import { combineReducers } from 'redux';
import algorithmReducer from './AlgorithmReducer'
import ProcessListReducer from './ProcessListReducer'

export const Reducers = combineReducers({
    algorithm: algorithmReducer,
    processList: ProcessListReducer
});