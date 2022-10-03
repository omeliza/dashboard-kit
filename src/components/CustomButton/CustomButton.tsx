import { MyButton } from 'components/CustomButton/styles';
import { IButtonProps } from 'interfaces/interfaces';

const CustomButton = ({ name }: IButtonProps) => {
  return <MyButton type="submit">{name}</MyButton>;
};

export default CustomButton;
