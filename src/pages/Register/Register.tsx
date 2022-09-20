/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import ReactModal from 'react-modal';
import { joiResolver } from '@hookform/resolvers/joi';

import s from 'pages/Register/Register.module.scss';
import { customStyles } from 'pages/Login/Login';
import { signUp } from 'services/auth.service';
import Logo from 'components/Logo/Logo';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { registerSchema } from 'constants/validationSchemas';
import { IAuthFormInputs, SignUp } from 'interfaces/interfaces';

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
    <div className={s.wrapper}>
      <div className={s.block}>
        <Logo />
        <h1 className={s.h1}>Sign Up</h1>
        <span className={s.subtitle}>Create a new account</span>
        <ReactModal
          style={customStyles}
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          {message}
        </ReactModal>
        <FormProvider {...methods}>
          <form className={s.form} onSubmit={handleSubmit(onRegisterSubmit)}>
            <Input
              placeholder="Email address"
              type="email"
              label="email"
              name="email"
            />
            {errors.email && <p>{errors.email.message}</p>}
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
            <Input
              placeholder="Password"
              type="password"
              label="password"
              name="password"
            />
            {errors.password && <p>{errors.password?.message}</p>}
            <Input
              placeholder="Password"
              type="password"
              label="confirm password"
              name="confirmPassword"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword?.message}</p>}
            <h5 className={s.h5} style={{ marginTop: 0, textAlign: 'right' }}>
              <Link to="/forgot" className={s.h5_bold}>
                Forgot Password?
              </Link>
            </h5>
            <div className={s.empty} />
            <Button name="Register" />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Register;
