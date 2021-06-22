import React from 'react';
import './index.scss';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => (
  <h1 className="title">{title}</h1>
);

export default Title;
