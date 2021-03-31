import React from 'react';
import PropTypes from 'prop-types';

// components
import Button from './Button';

function Header({ title }) {
  const onclick = () => {
    console.log('clicked');
  };
  return (
    <header className='header'>
      <h2>{title}</h2>
      <Button color='green' text='Add' onClick={onclick} />
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
