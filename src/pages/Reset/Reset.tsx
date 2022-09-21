/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import s from 'pages/Auth.module.scss';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Logo from 'components/Logo/Logo64/Logo';
import { onResetSubmit } from 'services/auth.service';
import { resetSchema } from 'constants/validationSchemas';
import { IReset } from 'interfaces/interfaces';

const Reset = () => {
  const methods = useForm<IReset>({
    mode: 'onBlur',
    resolver: joiResolver(resetSchema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <div className={s.wrapper}>
      <div className={s.block}>
        <Logo />
        <h1 className={s.h1}>Reset Password</h1>
        <span className={s.subtitle}>Enter new password</span>
        <FormProvider {...methods}>
          <form className={s.form} onSubmit={handleSubmit(onResetSubmit)}>
            <Input
              name="password"
              placeholder="Password"
              type="password"
              label="password"
            />
            {errors.password && (
              <p className={s.error}>{errors.password?.message}</p>
            )}
            <Input
              name="confirmPassword"
              placeholder="Password"
              type="password"
              label="confirm password"
            />
            {errors.confirmPassword && (
              <p className={s.error}>{errors.confirmPassword?.message}</p>
            )}
            <div className={s.empty} />
            <Button name="Send" />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Reset;
