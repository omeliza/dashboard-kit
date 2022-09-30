import { MyButton } from 'components/CustomButton/styles';

interface IButtonProps {
  name: string;
}
const CustomButton = ({ name }: IButtonProps) => {
  return <MyButton type="submit">{name}</MyButton>;
};

export default CustomButton;
