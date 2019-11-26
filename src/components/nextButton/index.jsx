import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const nextButton = props => {
  console.log(props);
  return (
    <Link to={ props.route } className='next-route'>
      { props.text }
    </Link>
  );
};
export default nextButton;
