import { combineReducers } from 'redux';
import algorithmReducer from './AlgorithmReducer'

export const Reducers = combineReducers({
    algorithm: algorithmReducer
});