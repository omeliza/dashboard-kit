import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { handleSubmit } from 'services/auth.service';
import s from 'pages/Auth/Auth.module.scss';
import Logo from 'components/Logo/Logo';

const Forgot = () => {
  const location = useLocation();

  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <Logo />
        <h1 className={s.h1}>Forgot password?</h1>
        {location.pathname === '/forgot-success' ? (
          <span className={s.subtitle}>
            Link to change your password has been sent to provided email if we
            have it inside our system
          </span>
        ) : (
          <>
            <span>Enter your email from registered account</span>
            <form className={s.form} onSubmit={handleSubmit}>
              <Input placeholder="Email address" type="email" label="email" />
              <Button name="Send" />
            </form>
            <h5 className={s.h5}>
              Don&apos;t have an account?&ensp;
              <Link to="/signup" className={s.h5_bold}>
                Sign up
              </Link>
            </h5>
          </>
        )}
      </div>
    </div>
  );
};

export default Forgot;
