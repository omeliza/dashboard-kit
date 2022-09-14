import React from 'react';
import s from './Input.module.scss';

const Input = ({ placeholder, type, label }) => {
  return (
    <label className={s.label}>
      {label.toUpperCase()}
      <input type={type} placeholder={placeholder} className={s.input} />
    </label>
  );
};

export default Input;
