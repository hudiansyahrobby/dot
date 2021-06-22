import React from 'react';
import { useForm } from 'react-hook-form';
import useLogin from '../../hooks/useLogin';
import { AuthType } from '../../types/AuthType';
import Button from '../Button';
import Input from '../Input';
import Title from '../Title';
import './index.scss';
import { ReactComponent as LoginImage } from '../../assets/image.svg';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const { mutateAsync } = useLogin();

  const onLogin = handleSubmit(async (loginData: AuthType) => {
    await mutateAsync(loginData);
  });

  return (
    <div className="login">
      <Title title="Login Akun" />
      <div className="login-grid">
        <LoginImage className="login-image" />
        <form className="login-form" onSubmit={onLogin}>
          <Input
            placeholder="Masukkan email"
            id="email"
            type="email"
            register={{ ...register('email') }}
            label="Email"
          />
          <Input
            placeholder="Masukkan password"
            type="password"
            register={{ ...register('password') }}
            label="Password"
            id="password"
          />
          <div className="submit-btn">
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
