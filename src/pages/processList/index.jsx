import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import defineProcessType from '../../actions/defineProcessType';
import ProcessType from '../../constants/processType'
import styled from 'styled-components';
import Next from '../../components/nextButton';
import Button from '../../components/button';
import { Container, Content, Title, Label } from '../../styles/styledComponents';

const Div = styled.div`
  width: 100%;
`;

const H3 = styled.h3`
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  font-size: 1.3em;
`;

const labelCss = { 
  width: '100%', 
};

const divCss = {
  display: 'flex',
  justifyContent: 'center'
}

const processList = props => {
  const { defineProcessType } = props;
  
  return (
    <Container>
      <Content>
        <Title>Configure a Lista de processos</Title>
        <H3>Escolha o tipo de processo</H3>
        <Label style={labelCss}>
          <input
            type='radio'
            name='process-type'
            defaultChecked
            onChange={()=>defineProcessType(ProcessType.IO)}
          />
          IO
        </Label>
        <Label style={labelCss}>
          <input
            type='radio'
            name='process-type'
            onChange={()=>defineProcessType(ProcessType.CPU)}
          />
          CPU
        </Label>

        <Div>
          <H3>Insira o nome do processo:</H3>
          <Input type="text" placeholder="Nome do processo" />
        </Div>

        <Div>
          <H3>Insira o tempo em segundos:</H3>
          <Input type="text" placeholder="Tempo em segundos" />
        </Div>

        <Div>
          <H3>Insira a Prioridade</H3>
          <Input type="text" placeholder="Proridade" />
        </Div>

        <Div style={divCss}>
          <Button text="Usar lista sugerida" />
          <Next route="" text="Executar" />
        </Div>
      </Content>
    </Container>
  )
};

const mapStateToProps = store => ({
  processType: store.type.processType
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ defineProcessType }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(processList);
