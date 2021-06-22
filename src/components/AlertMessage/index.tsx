import React from 'react';
import './index.scss';

interface AlertMessageProps {
  title: string;
  status: 'error' | 'success';
}

const AlertMessage: React.FC<AlertMessageProps> = ({ title, status }) => (
  <div className={`alert alert-${status}`}>{title}</div>
);

export default AlertMessage;
