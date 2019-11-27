import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

const NextButton = props => {
  return (
    <Link to={ props.route } className='next-route'>
      { props.text }
    </Link>
  );
};

NextButton.prototype = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default NextButton;
