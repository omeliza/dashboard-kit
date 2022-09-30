/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import ReactModal from 'react-modal';
import { joiResolver } from '@hookform/resolvers/joi';

import { signUp } from 'services/auth.service';
import Logo from 'components/Logo/Logo64/Logo';
import Input from 'components/Input/Input';
import { registerSchema } from 'constants/validationSchemas';
import { IAuthFormInputs, SignUp } from 'interfaces/interfaces';
import CustomButton from 'components/CustomButton/CustomButton';
import { ErrorTypo } from 'pages/Contacts/ContactsModal/ErrorTypo';
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
} from 'components/Auth/styles';

const Register = () => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const methods = useForm<IAuthFormInputs>({
    mode: 'onBlur',
    resolver: joiResolver(registerSchema),
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
  const onRegisterSubmit = async (data: SignUp) => {
    try {
      const response = await signUp(
        data.email,
        data.firstName,
        data.lastName,
        data.password,
      );
      if (response.status === 201) {
        reset();
        navigate('/login');
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
        <AuthTitle>Sign Up</AuthTitle>
        <Subtitle>Create a new account</Subtitle>
        <ReactModal
          style={customStyles}
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          {message}
        </ReactModal>
        <FormProvider {...methods}>
          <AuthForm onSubmit={handleSubmit(onRegisterSubmit)}>
            <Input
              placeholder="Email address"
              type="email"
              label="email"
              name="email"
            />
            {errors.email && <ErrorTypo>{errors.email.message}</ErrorTypo>}
            <Input
              placeholder="First name"
              type="text"
              label="first name"
              name="firstName"
            />
            {errors.firstName && (
              <ErrorTypo>{errors.firstName.message}</ErrorTypo>
            )}
            <Input
              placeholder="Last name"
              type="text"
              label="last name"
              name="lastName"
            />
            {errors.lastName && (
              <ErrorTypo>{errors.lastName.message}</ErrorTypo>
            )}
            <Input
              placeholder="Password"
              type="password"
              label="password"
              name="password"
            />
            {errors.password && (
              <ErrorTypo>{errors.password?.message}</ErrorTypo>
            )}
            <Input
              placeholder="Password"
              type="password"
              label="confirm password"
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <ErrorTypo>{errors.confirmPassword?.message}</ErrorTypo>
            )}
            <AuthBottomTitle>
              <Link to="/forgot" style={linkStyles}>
                Forgot Password?
              </Link>
            </AuthBottomTitle>
            <Empty />
            <CustomButton name="Register" />
          </AuthForm>
        </FormProvider>
      </Block>
    </Wrapper>
  );
};

export default Register;
