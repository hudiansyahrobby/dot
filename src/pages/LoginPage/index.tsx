import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import Layout from '../../components/Layout';
import LoginForm from '../../components/LoginForm';
import { AuthContext } from '../../context/AuthProvider';

const LoginPage = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/" />;
  }
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
