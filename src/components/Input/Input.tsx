import s from './Input.module.scss';

interface IInputProps {
  placeholder: string;
  type: string;
  label: string;
}
const Input = ({ placeholder, type, label }: IInputProps) => {
  return (
    <label className={s.label}>
      {label.toUpperCase()}
      <input type={type} placeholder={placeholder} className={s.input} />
    </label>
  );
};

export default Input;
