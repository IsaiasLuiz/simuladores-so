import { combineReducers } from 'redux';
import algorithmReducer from './AlgorithmReducer'
import typeProcessreducer from './TypeProcessReducer'

export const Reducers = combineReducers({
    algorithm: algorithmReducer,
    type: typeProcessreducer
});