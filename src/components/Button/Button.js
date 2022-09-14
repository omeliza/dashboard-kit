import React from 'react';
import s from './Button.module.scss';

const Button = ({ name }) => {
  return <button className={s.button}>{name}</button>;
};

export default Button;
