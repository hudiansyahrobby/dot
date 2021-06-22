import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const Logo = () => (
  <div className="logo">
    <Link to="/" className="logo-link">
      Dot
    </Link>
  </div>
);

export default Logo;
