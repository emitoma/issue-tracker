import React from 'react';
//
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css';

import AuthHeader from './AuthHeader';

const Login = () => {
  return (
    <Container fluid className="Login">
      <h1 className="Login-title">Tracker App</h1>

      <div className="form-container ">
        <AuthHeader />
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
