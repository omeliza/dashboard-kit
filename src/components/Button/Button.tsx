import React from 'react';

import s from 'components/Button/Button.module.scss';

interface IButtonProps {
  name: string;
  // disabled: boolean;
}
const Button = ({ name }: IButtonProps) => {
  return (
    <button className={s.button} type="submit">
      {name}
    </button>
  );
};

export default Button;
