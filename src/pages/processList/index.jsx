import React,{ Component } from 'react';
import styled from 'styled-components';
import ProcessTable from '../../components/processTable';
import Next from '../../components/nextButton';
import Button from '../../components/button';
import { Container, Content, Title, Label } from '../../styles/styledComponents';
import ProcessType from '../../constants/processType';
import ProcessListDefault from '../../constants/processList';

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

  export default class ProcessList extends Component {
    state = {
      processName: '',
      processType: ProcessType.IO,
      processTime: '',
      processPriority: '',
      processList:[]
    }
    addProcess = ()=> {    
      console.log(this.state.processList);
        
      const list = this.state.processList || [];
      const process = {
        processName: this.state.processName,
        processType: this.state.processType,
        processTime: this.state.processTime,
        processPriority: this.state.processPriority
      }
      list.push(process);
      this.setState({processList: list});
      this.clearFields();
    }

    clearFields = () => {
      this.setState({
        processName: '',
        processType: ProcessType.IO,
        processTime: '',
        processPriority: ''
      });
    };

    processDefault = ()=> {
      this.setState({processList: ProcessListDefault});
    }

    render(){
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
                onChange={()=>this.setState({processType: ProcessType.IO})}
              />
              IO
            </Label>
            <Label style={labelCss}>
              <input
                type='radio'
                name='process-type'
                onChange={()=>this.setState({processType: ProcessType.CPU})}
              />
              CPU
            </Label>

            <Div>
              <H3>Insira o nome do processo:</H3>
              <Input type="text" placeholder="Nome do processo" 
              value={this.state.processName}
                onChange={(event)=>this.setState({processName: event.target.value})}
              />
            </Div>

            <Div>
              <H3>Insira o tempo em segundos:</H3>
              <Input type="number" placeholder="Tempo em segundos" 
              value={this.state.processTime}
                onChange={(event)=>this.setState({processTime: event.target.value})}
              />
            </Div>

            <Div>
              <H3>Insira a Prioridade</H3>
              <Input type="number" placeholder="Proridade" 
              value={this.state.processPriority}
                onChange={(event)=>this.setState({processPriority: event.target.value})}
              />
            </Div>

            <Div style={divCss}>
              <Button text="Usar lista sugerida" click={this.processDefault}/>
              <Button text="Adicionar" click={this.addProcess} />
              <Next route="" text="Executar" />
            </Div>
          </Content>
          <Content style={{'justifyContent': 'end', 'minWidth': '500px'}}>
            <Div>
              <H3>Lista de Processos:</H3>
              <ProcessTable list={this.state.processList}/>
            </Div>
          </Content>
      </Container>
    )};
  };


