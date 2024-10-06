import React from 'react';
import './DarkModeToggle.scss';

const DarkModeToggle = ({ onToggle , isDarkMode}) => {
  return (
    <button onClick={onToggle}  className='toggleButton'>
       {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default DarkModeToggle;
