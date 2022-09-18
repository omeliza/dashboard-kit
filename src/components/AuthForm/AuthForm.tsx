/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import s from 'pages/Auth/Auth.module.scss';
import { onAuthSubmit } from 'services/auth.service';
import { authSchema } from 'constants/validationSchemas';
import { IAuthFormInputs } from 'interfaces/interfaces';

const AuthForm = () => {
  const location = useLocation();
  const methods = useForm<IAuthFormInputs>({
    mode: 'all',
    resolver: joiResolver(authSchema),
  });
  const {
    handleSubmit,
    formState: { isValid, errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form className={s.form} onSubmit={handleSubmit(onAuthSubmit)}>
        <Input
          placeholder="Email address"
          type="email"
          label="email"
          name="email"
        />
        {errors.email && <p>{errors.email.message}</p>}
        {location.pathname === '/signup' ? (
          <>
            <Input
              placeholder="First name"
              type="text"
              label="first name"
              name="firstName"
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <Input
              placeholder="Last name"
              type="text"
              label="last name"
              name="lastName"
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </>
        ) : (
          ''
        )}
        <Input
          placeholder="Password"
          type="password"
          label="password"
          name="password"
        />
        {errors.password && <p>{errors.password?.message}</p>}
        {location.pathname === '/signup' ? (
          <>
            <Input
              placeholder="Password"
              type="password"
              label="confirm password"
              name="confirmPassword"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
          </>
        ) : (
          ''
        )}
        <div className={s.empty} />
        <Button
          disabled={!isValid}
          name={location.pathname === '/signup' ? 'Register' : 'Log In'}
        />
      </form>
    </FormProvider>
  );
};

export default AuthForm;
