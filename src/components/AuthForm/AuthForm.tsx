import React from 'react';
import { useLocation } from 'react-router-dom';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import s from 'pages/Auth/Auth.module.scss';
import { handleSubmit } from 'services/auth.service';

const AuthForm = () => {
  const location = useLocation();

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <Input placeholder="Email address" type="email" label="email" />
      {location.pathname === '/signup' ? (
        <>
          <Input placeholder="First name" type="text" label="first name" />
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
      <Button name={location.pathname === '/signup' ? 'Register' : 'Log In'} />
    </form>
  );
};

export default AuthForm;
