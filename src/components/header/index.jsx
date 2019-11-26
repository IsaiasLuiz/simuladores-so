import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100px;
  font-size: 2em;
  font-weight: 900;
  color: #fff;
  background: #089eda;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const header = () => {
  return <Div className='header'>Simuladores de SO</Div>;
};

export default header;
