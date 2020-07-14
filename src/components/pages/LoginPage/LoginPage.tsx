import React from "react";

import { useAuth } from 'context/AuthContext';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {

  const { login } = useAuth();

  const onSubmit = (formValues: any) => {
    const { email } = formValues;
    if (login) login(email);
  }

  return <LoginForm onSubmit={onSubmit} />

}

export default LoginPage;
