import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';
import { handleSubmit } from '../../services/auth.service';
import s from '../Auth/Auth.module.scss';

const Reset = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <Logo />
        <h1 className={s.h1}>Reset Password</h1>
        <span className={s.subtitle}>Enter new password</span>
        <form className={s.form} onSubmit={handleSubmit}>
          <Input placeholder="Password" type="password" label="password" />
          <Input
            placeholder="Password"
            type="password"
            label="confirm password"
          />
          <Button name="Send" />
        </form>
      </div>
    </div>
  );
};

export default Reset;
