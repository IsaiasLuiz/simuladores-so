import React from 'react';
import styled from 'styled-components';
import Next from '../../components/nextButton';
import { Container, Content, Title } from '../../styles/styledComponents';

const processList = props => {
  return (
    <Container>
      <Content>
        <Title>Configure a Lista de processos</Title>
        <Next route="" text="Executar"/>
      </Content>
    </Container>
  )
};

export default processList;
