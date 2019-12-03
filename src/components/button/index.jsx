import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Btn = styled.button`
    text-decoration: none;
    padding: 10px;
    font-size: 1.3em;
    height: 50px;
    background: orange;
    border-radius: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Button = props=>{
    return <Btn onClick={props.click}>{ props.text }</Btn>
}

Button.prototype = {
    text: PropTypes.string.isRequired
}

export default Button;