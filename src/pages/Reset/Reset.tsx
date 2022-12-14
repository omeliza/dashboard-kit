/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import Input from 'components/Input/Input';
import Logo from 'components/Logo/LogoMedium/LogoMedium';
import { onResetSubmit } from 'services/auth.service';
import { resetSchema } from 'constants/validationSchemas';
import { IReset } from 'interfaces/interfaces';
import CustomButton from 'components/CustomButton/CustomButton';
import {
  AuthForm,
  AuthTitle,
  Block,
  Empty,
  Subtitle,
  Wrapper,
} from 'components/Auth/styles';
import { ErrorTypo } from 'components/Typographies/Typographies';

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
    <Wrapper>
      <Block>
        <Logo />
        <AuthTitle>Reset Password</AuthTitle>
        <Subtitle>Enter new password</Subtitle>
        <FormProvider {...methods}>
          <AuthForm onSubmit={handleSubmit(onResetSubmit)}>
            <Input
              name="password"
              placeholder="Password"
              type="password"
              label="password"
            />
            {errors.password && (
              <ErrorTypo>{errors.password?.message}</ErrorTypo>
            )}
            <Input
              name="confirmPassword"
              placeholder="Password"
              type="password"
              label="confirm password"
            />
            {errors.confirmPassword && (
              <ErrorTypo>{errors.confirmPassword?.message}</ErrorTypo>
            )}
            <Empty />
            <CustomButton name="Send" />
          </AuthForm>
        </FormProvider>
      </Block>
    </Wrapper>
  );
};

export default Reset;
