import React from 'react';
import { useForm } from 'react-hook-form';
import useSignup from '../../hooks/useSignup';
import { AuthType } from '../../types/AuthType';
import Button from '../Button';
import Input from '../Input';
import Title from '../Title';
import './index.scss';
import { ReactComponent as RegisterImage } from '../../assets/image.svg';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();

  const { mutateAsync } = useSignup();

  const onRegister = handleSubmit(async (registerData: AuthType) => {
    await mutateAsync(registerData);
  });

  return (
    <div className="register">
      <Title title="Buat Akun" />
      <div className="register-grid">
        <RegisterImage className="register-image" />
        <form className="register-form" onSubmit={onRegister}>
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
            <Button type="submit">Daftar</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
