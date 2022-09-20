/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { AxiosError } from 'axios';
import ReactModal from 'react-modal';
import { joiResolver } from '@hookform/resolvers/joi';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Logo from 'components/Logo/Logo';
import s from 'pages/Login/Auth.module.scss';
import { SignIn } from 'interfaces/interfaces';
import { signIn } from 'services/auth.service';
import { loginSchema } from 'constants/validationSchemas';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Login = () => {
  const [message, setMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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
      const response = await signIn(data.email, data.password);
      if (response.status === 200) {
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
    <div className={s.wrapper}>
      <div className={s.block}>
        <Logo />
        <h1 className={s.h1}>Log In to Dashboard Kit</h1>
        <span className={s.subtitle}>Enter your email and password</span>
        <ReactModal
          style={customStyles}
          isOpen={isOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
        >
          {message}
        </ReactModal>
        <FormProvider {...methods}>
          <form className={s.form} onSubmit={handleSubmit(onLoginSubmit)}>
            <Input
              placeholder="Email address"
              type="email"
              label="email"
              name="email"
            />
            {errors.email && <p>{errors.email.message}</p>}
            <Input
              placeholder="Password"
              type="password"
              label="password"
              name="password"
            />
            {errors.password && <p>{errors.password?.message}</p>}
            <h5 className={s.h5} style={{ marginTop: 0, textAlign: 'right' }}>
              <Link to="/forgot" className={s.h5_bold}>
                Forgot Password?
              </Link>
            </h5>
            <div className={s.empty} />
            <Button name="Log In" />
          </form>
        </FormProvider>
        <h5 className={s.h5}>
          Don&apos;t have an account?&ensp;
          <Link to="/register" className={s.h5_bold}>
            Sign up
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
