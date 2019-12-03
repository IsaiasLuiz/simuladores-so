import React from 'react';
import { connect } from 'react-redux';
import ButtonRedirect from '../../components/nextButton';
import { Container, Content, Title, Label } from '../../styles/styledComponents';

const Simulation = props => {
    const { algorithm, processList } = props;
    return (
        <Container>
            <Content>
                {algorithm}
                <ButtonRedirect route="/" text="Página Inicial" />
            </Content>
        </Container>
    );
};

const mapStateToProps = store =>({
        algorithm: store.algorithm.algorithm,
        processList: store.processList
  });
  
export default connect(mapStateToProps)(Simulation);