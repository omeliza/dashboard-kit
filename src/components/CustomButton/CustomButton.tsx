import { MyButton } from 'components/CustomButton/styles';
import { IButtonProps } from 'interfaces/interfaces';

const CustomButton = ({ name, disabled }: IButtonProps) => {
  return (
    <MyButton type="submit" disabled={disabled}>
      {name}
    </MyButton>
  );
};

export default CustomButton;
