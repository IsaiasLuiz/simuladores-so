import React from 'react';
import NextButton from '../../components/nextButton';
import styled from 'styled-components';
import Algorithms from '../../constants/algorithms';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content } from '../../styles/styledComponents';
import defineAlgorithm from '../../actions';

const Title = styled.h1`
	font-size: 1.5em;
	display: block;
`;

const Label = styled.label`
	display: block;
	border: 1px solid #123;
	margin: 10px;
	font-size: 1.2em;
	cursor: pointer;

	&:hover {
		color: #df2f12;
	}
`;

const HomePage = props => {
	const { defineAlgorithm } = props;

	return (
		<Container>
			<Content>
				<Title>Escolha o Algoritmo de Ordenação</Title>
				<Label>
					<input
						type='radio'
						name='algorithm-option'
						defaultChecked
						onChange={() => defineAlgorithm(Algorithms.ROUND_ROBIN)}
					/>
					Round Robin
				</Label>
				<Label>
					<input
						type='radio'
						name='algorithm-option'
						onChange={() => defineAlgorithm(Algorithms.QUEUES)}
					/>
					Queues
				</Label>
				<Label>
					<input
						type='radio'
						name='algorithm-option'
						onChange={() => defineAlgorithm(Algorithms.A_PRIORITY)}
					/>
					A priority
				</Label>
				<NextButton route='' text='Próximo' />
			</Content>
		</Container>
	);
};

const mapStateToProps = store => ({
	algorithm: store.algorithm.algorithm
});

const mapDispatchToProps = dispatch =>
	bindActionCreators({ defineAlgorithm }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
