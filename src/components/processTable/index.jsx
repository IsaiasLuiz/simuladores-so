import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
    min-width: 100%;
    font-size: 1.4em;
    overflow-y: scroll;
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

const processTable = props => (
    <Table>
        <Tr>
            <Th>Nome</Th>
            <Th>Tipo</Th>
            <Th>Tempo</Th>
            <Th>Prioridade</Th>
        </Tr>
        {props.list.map(value=>(
            <Tr key={value.processName}>
                <Td>{value.processName}</Td>
                <Td>{value.processType}</Td>
                <Td>{value.processTime}</Td>
                <Td>{value.processPriority}</Td>
            </Tr>
        ))}        
    </Table>
);

export default processTable;

processTable.prototype = {
    list: PropTypes.array.isRequired
}