import algorithms from '../constants/algorithms';

const defineAlgorithm = value => {
	return {
		type: algorithms.ROUND_ROBIN,
		algorithm: value.algorithm
	};
};

export default defineAlgorithm;
