import s from './Button.module.scss';

interface IButtonProps {
  name: string;
}
const Button = ({ name }: IButtonProps) => {
  return <button className={s.button}>{name}</button>;
};

export default Button;
