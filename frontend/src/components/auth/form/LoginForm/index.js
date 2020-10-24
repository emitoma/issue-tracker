import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="john@doe.com" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>

        <Form.Control type="password" />
      </Form.Group>

      <Button variant="primary" block type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;