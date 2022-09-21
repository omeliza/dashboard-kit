/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Logo from 'components/Logo/Logo64/Logo';
import { onForgotSubmit } from 'services/auth.service';
import s from 'pages/Auth.module.scss';
import { forgotSchema } from 'constants/validationSchemas';
import { IForgot } from 'interfaces/interfaces';

const Forgot = () => {
  const location = useLocation();
  const methods = useForm<IForgot>({
    mode: 'onBlur',
    resolver: joiResolver(forgotSchema),
  });
  const {
    formState: { errors },
    handleSubmit,
  } = methods;

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
            <FormProvider {...methods}>
              <form className={s.form} onSubmit={handleSubmit(onForgotSubmit)}>
                <Input
                  name="email"
                  placeholder="Email address"
                  type="email"
                  label="email"
                />
                {errors.email && (
                  <p className={s.error}>{errors.email?.message}</p>
                )}
                <div className={s.empty} />
                <Button name="Send" />
              </form>
            </FormProvider>
            <h5 className={s.h5}>
              Don&apos;t have an account?&ensp;
              <Link to="/register" className={s.h5_bold}>
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
