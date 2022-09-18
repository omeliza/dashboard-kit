/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import hide from 'assets/hide.png';
import show from 'assets/show.png';
import s from 'components/Input/Input.module.scss';
import { useFormContext } from 'react-hook-form';
import { IInputProps } from 'interfaces/interfaces';

const Input = ({ placeholder, type, label, name }: IInputProps) => {
  const [passwordShown, setPasswordShown] = useState(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const { register } = useFormContext();
  return (
    <label className={s.label}>
      {label.toUpperCase()}
      <input
        {...register(name)}
        type={passwordShown ? type : 'text'}
        placeholder={placeholder}
        className={s.input}
        autoComplete="true"
      />
      <button type="button" className={s.toggle} onClick={togglePassword}>
        <img src={passwordShown ? hide : show} alt="hide" />
      </button>
    </label>
  );
};

export default Input;
