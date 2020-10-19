import React from 'react';
//
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import css from './style.module.scss';

import AuthHeader from '../../../components/auth/index';
import { useState } from 'react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container fluid className={css['Login']}>
      <h1 className={css['title']}>Tracker App</h1>

      <div className={css['form-container']}>
        <AuthHeader isLogin={isLogin} setIsLogin={setIsLogin} />
        <Form>
          <Form.Group>
            <Form.Control type="email" placeholder="Email address" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password " />
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password Again" />
          </Form.Group>
          <Button variant="primary" block type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
