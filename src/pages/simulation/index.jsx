import React, { Component } from 'react';
import { connect } from 'react-redux';
import Algorithms from '../../constants/algorithms';
import RoundRobin from '../../functions/RoundRobin';
import Priority from '../../functions/Priority';
import Queues from '../../functions/Queues';
import styled from 'styled-components';
import ButtonRedirect from '../../components/button';
import { Container, Content, Title, Label } from '../../styles/styledComponents';

let computer = 0

const Table = styled.table`
    min-width: 100%;
    font-size: 1.4em;
    height: 100px;
    overflow-y: scroll;
    border: 1px solid #514a58;
`;

const Tr = styled.tr`
    font-size: 1em;
`;

const Th = styled.th`
    text-align: left;
    border: 1px solid #514a58;
`;

const Td = styled.td`
    border: 1px solid #514a58;
`;

class Simulation extends Component {
    state = {
        processList: [],
        algorithm: ''
    };

    componentDidMount = ()=> {
        const { processList } = this.props.processList;
        const { algorithm } = this.props;
          const list = [];
        processList.map(element => {
            list.push({processName: element.processName,
            processType: element.processType,
            processTime: parseInt(element.processTime),
            processPriority: parseInt(element.processPriority),
            processExecutionTime: parseInt(element.processExecutionTime)
        })
        });
        
        this.setState({processList: list});
        this.setState({algorithm: algorithm})
        
        
    };
    redirect = ()=>{
        window.location.reload();
        window.location.href = "/";
    }

    defineListByProcess = ()=> {
        const { processExecutionTime } = this.state.processList[0] || 5;

        if (this.state.algorithm === Algorithms.ROUND_ROBIN) {
            return RoundRobin(this.state.processList, processExecutionTime);
        } else if (this.state.algorithm === Algorithms.QUEUES) {
            return Queues(this.state.processList);
        } else if (this.state.algorithm === Algorithms.A_PRIORITY) {
            return Priority(this.state.processList);
        }
    }

    render() {  
        const list =  this.defineListByProcess() || [];
        return (
            <Container>
                <Content >
                    <Title>Simulação:</Title>
                    <div style={{'width': '600px', 'height': '400px', 'overflowY': 'scroll'}}>
                    <Table>
                            <Tr>
                                <Th>Nome</Th>
                                <Th>Tipo</Th>
                                <Th>Tempo</Th>
                                <Th>Prioridade</Th>
                                <Th>Tempo restante</Th>
                            </Tr>
                            {list.map(value=>(
                                <Tr key={computer++}>
                                    <Td>{value.processName}</Td>
                                    <Td>{value.processType}</Td>
                                    <Td>{value.processTime}</Td>
                                    <Td>{value.processPriority}</Td>
                                    <Td>{value.processTimeLeft}</Td>
                                </Tr>
                            ))}        
                        </Table>
                    </div>
                    <ButtonRedirect background={ "rgb(22, 231, 22)" } click={ this.redirect } text="Página Inicial" />
                </Content>
            </Container>
        )
    };
}

const mapStateToProps = store =>({
        algorithm: store.algorithm.algorithm,
        processList: store.processList
  });
  
export default connect(mapStateToProps)(Simulation);