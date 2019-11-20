import React, { useState } from 'react';
import NextButton from '../../components/nextButton';
import styled from 'styled-components';
import Algorithms from '../../constants/algorithms';
import { Container, Content } from '../../styles/styledComponents';

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

const HomePage = () => {
	const [algorithm, setAlgorithm] = useState(Algorithms.ROUND_ROBIN);

	return (
		<Container>
			<Content>
				<Title>Escolha o Algoritmo de Ordenação</Title>
				<Label>
					<input
						type='radio'
						name='algorithm-option'
						defaultChecked
						onChange={() => setAlgorithm(Algorithms.ROUND_ROBIN)}
					/>
					Round Robin
				</Label>
				<Label>
					<input
						type='radio'
						name='algorithm-option'
						onChange={() => setAlgorithm(Algorithms.QUEUES)}
					/>{' '}
					Queues
				</Label>
				<Label>
					<input
						type='radio'
						name='algorithm-option'
						onChange={() => setAlgorithm(Algorithms.A_PRIORITY)}
					/>{' '}
					A priority
				</Label>
				<NextButton
					route=''
					text='Próximo'
					onclick={() => console.log(Algorithms.ROUND_ROBIN)}
				/>
			</Content>
		</Container>
	);
};

export default HomePage;
