import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './index.scss';

type InputProps = {
  id: string;
  label: string;
  type?: 'text' | 'number' | 'password' | 'email';
  placeholder: string;
  register: UseFormRegisterReturn;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  label,
  id,
  register,
  ...props
}) => (
  <div className="input">
    <label className="input-label">{label}</label>
    <input className="input-form" type={type} {...register} {...props} />
  </div>
);

export default Input;
