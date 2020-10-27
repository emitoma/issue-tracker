import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import register from '../../../../lib/auth/redux/thunks/register';
import authSelectors from '../../../../lib/auth/redux/selector'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

const RegisterForm = () => {
  const dispatch = useDispatch();
  //const errors = useSelector(authSelectors.getRegisterErrors);
  

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordAgain, setPasswordAgain] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ email, password, passwordAgain }));
  };

  return (
    <Form onSubmit={onSubmit}>



      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="john@doe.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>

        <Form.Control
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password Again</Form.Label>

        <Form.Control
          type="password"
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" block type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
