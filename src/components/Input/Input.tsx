/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import hide from 'assets/hide.png';
import show from 'assets/show.png';
import s from 'components/Input/Input.module.scss';
import { IInputProps } from 'interfaces/interfaces';
import { $grey2 } from 'constants/colors';

const StyledLabel = styled.label`
  font-size: 12px;
  line-height: 15.06px;
  font-weight: 700;
  color: ${$grey2};
  position: relative;
  letter-spacing: 0.3px;
  left: 0;
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
`;

const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  margin-bottom: 4px;
  width: 316px;
  height: 42px;
  background-color: #fcfdfe;
  border: 1px solid #f0f1f7;
  border-radius: 8px;
  padding: 11px 16px;

  &::placeholder {
    color: $grey3;
    font-family: 'Mulish';
    font-size: 14px;
    letter-spacing: 0.3px;
  }
`;

const Input = ({ placeholder, type, label, name }: IInputProps) => {
  const [passwordShown, setPasswordShown] = useState(true);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const { register } = useFormContext();
  return (
    <StyledLabel>
      {label.toUpperCase()}
      <StyledInput
        {...register(name)}
        type={passwordShown ? type : 'text'}
        placeholder={placeholder}
        autoComplete="true"
      />
      <button type="button" className={s.toggle} onClick={togglePassword}>
        <img src={passwordShown ? hide : show} alt="hide" />
      </button>
    </StyledLabel>
  );
};

export default Input;
