import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from 'components/Logo/Logo';
import s from 'pages/Auth/Auth.module.scss';
import AuthForm from 'components/AuthForm/AuthForm';

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
        <AuthForm />
        {location.pathname === '/signup' ? (
          ''
        ) : (
          <h5 className={s.h5}>
            Don&apos;t have an account?&ensp;
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
