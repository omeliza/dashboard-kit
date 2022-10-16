/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import ReactModal from 'react-modal';
import { joiResolver } from '@hookform/resolvers/joi';
import jwtDecode from 'jwt-decode';

import Input from 'components/Input/Input';
import Logo from 'components/Logo/LogoMedium/LogoMedium';
import { SignIn } from 'interfaces/interfaces';
import { signIn } from 'services/auth.service';
import CustomButton from 'components/CustomButton/CustomButton';
import { useAppDispatch } from 'redux/hooks';
import { authenticated, setUser } from 'redux/slices/auth/auth.slice';
import {
  AuthBottomTitle,
  AuthForm,
  AuthTitle,
  Block,
  customStyles,
  Empty,
  linkStyles,
  Subtitle,
  Wrapper,
} from 'styles/styles';
import { ErrorTypo } from 'components/Typographies/Typographies';
import { loginSchema } from 'pages/Login/login.schema';

const Login = () => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const methods = useForm<SignIn>({
    mode: 'onBlur',
    resolver: joiResolver(loginSchema),
  });
  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = methods;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const onLoginSubmit = async (data: SignIn) => {
    try {
      localStorage.removeItem('token');
      const response = await signIn(data.email, data.password);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        dispatch(setUser(jwtDecode(response.data.token)));
        dispatch(authenticated());
        reset();
        navigate('/');
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setMessage(error?.response?.data.message);
        openModal();
      }
    }
  };
  return (
    <Wrapper>
      <Block>
        <Logo />
        <AuthTitle>Log In to Dashboard Kit</AuthTitle>
        <Subtitle>Enter your email and password</Subtitle>
        <ReactModal
          style={customStyles}
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          {message}
        </ReactModal>
        <FormProvider {...methods}>
          <AuthForm onSubmit={handleSubmit(onLoginSubmit)}>
            <Input
              placeholder="Email address"
              type="email"
              label="email"
              name="email"
            />
            {errors.email && <ErrorTypo>{errors.email.message}</ErrorTypo>}
            <Input
              placeholder="Password"
              type="password"
              label="password"
              name="password"
            />
            {errors.password && (
              <ErrorTypo>{errors.password?.message}</ErrorTypo>
            )}
            <AuthBottomTitle style={{ marginTop: 0, textAlign: 'right' }}>
              <Link to="/forgot" style={linkStyles}>
                Forgot Password?
              </Link>
            </AuthBottomTitle>
            <Empty />
            <CustomButton name="Log In" />
          </AuthForm>
        </FormProvider>
        <AuthBottomTitle>
          Don&apos;t have an account?&ensp;
          <Link to="/register" style={linkStyles}>
            Sign up
          </Link>
        </AuthBottomTitle>
      </Block>
    </Wrapper>
  );
};

export default Login;
