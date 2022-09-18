/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Logo from 'components/Logo/Logo';
import { onResetSubmit } from 'services/auth.service';
import s from 'pages/Auth/Auth.module.scss';
import { resetSchema } from 'constants/schemas';
import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { IReset } from 'interfaces/interfaces';

const Reset = () => {
  const methods = useForm<IReset>({
    mode: 'all',
    resolver: joiResolver(resetSchema),
  });
  const {
    handleSubmit,
    formState: { isValid, errors },
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
            {errors.password && <p>{errors.password?.message}</p>}
            <Input
              name="confirmPassword"
              placeholder="Password"
              type="password"
              label="confirm password"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
            <div className={s.empty} />
            <Button disabled={!isValid} name="Send" />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Reset;
