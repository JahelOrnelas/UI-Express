import React from 'react';
import './Input.css';

const Input = ({ placeholder, onChange }) => {
  return (
    <input type="text" placeholder={placeholder} onChange={onChange} className="input" />
  );
};

export default Input;
