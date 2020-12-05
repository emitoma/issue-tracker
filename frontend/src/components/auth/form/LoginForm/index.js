import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import login from '../../../../lib/auth/redux/thunks/login';
import authSelectors from '../../../../lib/auth/redux/selector';
import authActions from '../../../../lib/auth/redux/actions';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const LoginForm = () => {
  const dispatch = useDispatch();
  const errors = useSelector(authSelectors.getRegisterErrors);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    setFormErrors({ email: '', password: '' });
    dispatch(authActions.clearErrors());

    const formData = {
      email,
      password,
    };
    dispatch(login({ formData, setFormErrors }));
  };

  return (
    <Form onSubmit={onSubmit}>
      <div>
        {errors.map((err, index) => {
          console.log(
            err,
            'err'
          )(
            <Alert variant='danger' key={index}>
              {err}
            </Alert>
          );
        })}
      </div>

      {isLoggedIn && <Alert variant='success'>Login is successful</Alert>}

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type='email'
          placeholder='john@doe.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors.emil && (
          <Form.Control.Feedback type='invalid'>
            {formErrors.email}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>

        <Form.Control
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {formErrors.password && (
          <Form.Control.Feedback type='invalid'>
            {formErrors.password}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Button variant='primary' block type='submit'>
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
