import s from './Auth.module.scss';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { handleSubmit } from '../../services/auth.service';

const Auth = () => {
  const location = useLocation();
  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <Logo />
        <h1 className={s.h1}>
          {location.pathname === '/signup'
            ? 'Sign Up'
            : 'Log In to Dashboard Kit'}
        </h1>
        <span className={s.subtitle}>
          {location.pathname === '/signup'
            ? 'Create a new account'
            : 'Enter your email and password'}
        </span>
        <form className={s.form} onSubmit={handleSubmit}>
          <Input placeholder="Email address" type="email" label="email" />
          {location.pathname === '/signup' ? (
            <>
              <Input placeholder="First name" type="text" label="first name" />{' '}
              <Input placeholder="Last name" type="text" label="last name" />
            </>
          ) : (
            ''
          )}
          <Input placeholder="Password" type="password" label="password" />
          {location.pathname === '/signup' ? (
            <Input
              placeholder="Password"
              type="password"
              label="confirm password"
            />
          ) : (
            ''
          )}
          <Button
            name={location.pathname === '/signup' ? 'Register' : 'Log In'}
          />
        </form>
        {location.pathname === '/signup' ? (
          ''
        ) : (
          <h5 className={s.h5}>
            Don't have an account?&ensp;
            <Link to="/signup" className={s.h5_bold}>
              Sign up
            </Link>
          </h5>
        )}
      </div>
    </div>
  );
};

export default Auth;
