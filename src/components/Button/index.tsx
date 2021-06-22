import React, { ButtonHTMLAttributes } from 'react';
import './index.scss';

type ButtonProps = ButtonHTMLAttributes<any> & {
  children: React.ReactNode;
  width?: 'full';
};

const Button: React.FC<ButtonProps> = ({ children, width, ...props }) => (
  <button className={`btn btn-${width && width}`} {...props}>
    {children}
  </button>
);

export default Button;
