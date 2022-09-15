import { useState } from 'react';
import s from './Input.module.scss';
import hide from '../../assets/hide.png';
import show from '../../assets/show.png';

interface IInputProps {
  placeholder: string;
  type: string;
  label: string;
}
const Input = ({ placeholder, type, label }: IInputProps) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <label className={s.label}>
      {label.toUpperCase()}
      <input
        type={passwordShown ? type : 'text'}
        placeholder={placeholder}
        className={s.input}
      />
      <button className={s.toggle} onClick={togglePassword}>
        <img src={passwordShown ? show : hide} alt="hide" />
      </button>
    </label>
  );
};

export default Input;
