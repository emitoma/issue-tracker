import React from 'react';
//
import Container from 'react-bootstrap/Container';

import css from './style.module.scss';

import AuthHeader from '../../../components/auth/AuthHeader';
import RegisterForm from '../../../components/auth/form/RegisterForm';
import LoginForm from '../../../components/auth/form/LoginForm';

import { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container fluid className={css['Login']}>
      <h1 className={css['title']}>Issue Tracker</h1>

      <div className={css['form-container']}>
        <AuthHeader isLogin={isLogin} setIsLogin={setIsLogin} />
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </Container>
  );
};

export default Login;
