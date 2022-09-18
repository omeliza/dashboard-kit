import React from 'react';
import s from 'components/Button/Button.module.scss';

interface IButtonProps {
  name: string;
  disabled: boolean;
}
const Button = ({ name, disabled }: IButtonProps) => {
  return (
    <button className={s.button} type="button" disabled={disabled}>
      {name}
    </button>
  );
};

export default Button;
