/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import Input from 'components/Input/Input';
import Logo from 'components/Logo/Logo64/Logo';
import { onForgotSubmit } from 'services/auth.service';
import { forgotSchema } from 'constants/validationSchemas';
import { IForgot } from 'interfaces/interfaces';
import CustomButton from 'components/CustomButton/CustomButton';
import { ErrorTypo } from 'pages/Contacts/ContactsModal/ErrorTypo';
import {
  AuthBottomTitle,
  AuthForm,
  AuthTitle,
  Block,
  Empty,
  linkStyles,
  Subtitle,
  Wrapper,
} from 'components/Auth/styles';

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
    <Wrapper>
      <Block>
        <Logo />
        <AuthTitle>Forgot password?</AuthTitle>
        {location.pathname === '/forgot-success' ? (
          <Subtitle>
            Link to change your password has been sent to provided email if we
            have it inside our system
          </Subtitle>
        ) : (
          <>
            <span>Enter your email from registered account</span>
            <FormProvider {...methods}>
              <AuthForm onSubmit={handleSubmit(onForgotSubmit)}>
                <Input
                  name="email"
                  placeholder="Email address"
                  type="email"
                  label="email"
                />
                {errors.email && <ErrorTypo>{errors.email?.message}</ErrorTypo>}
                <Empty />
                <CustomButton name="Send" />
              </AuthForm>
            </FormProvider>
            <AuthBottomTitle>
              Don&apos;t have an account?&ensp;
              <Link to="/register" style={linkStyles}>
                Sign up
              </Link>
            </AuthBottomTitle>
          </>
        )}
      </Block>
    </Wrapper>
  );
};

export default Forgot;
