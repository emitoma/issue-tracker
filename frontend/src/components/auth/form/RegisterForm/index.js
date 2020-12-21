import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import register from '../../../../lib/auth/redux/thunks/register';
import authSelectors from '../../../../lib/auth/redux/selector';
import authActions from '../../../../lib/auth/redux/actions';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const errors = useSelector(authSelectors.getRegisterErrors);
  const isRegistered = useSelector(authSelectors.getIsRegistered);

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    passwordAgain: '',
  });

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordAgain, setPasswordAgain] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    setFormErrors({ email: '', password: '', passwordAgain: '' });
    dispatch(authActions.clearErrors());

    const formData = {
      email,
      password,
      passwordAgain,
    };
    dispatch(register({ formData, setFormErrors }));
  };

  return (
    <Form onSubmit={onSubmit}>
      <div>
        {errors.map((err, index) => (
          <Alert variant='danger' key={index}>
            {err}
          </Alert>
        ))}
      </div>

      {isRegistered && <Alert variant='success'>Created</Alert>}

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          isInvalid={!!formErrors.email}
          type='email'
          placeholder='john@doe.com'
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors.email && (
          <Form.Control.Feedback type='invalid'>
            {formErrors.email}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>

        <Form.Control
          isInvalid={!!formErrors.password}
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {formErrors.password && (
          <Form.Control.Feedback type='invalid'>
            {formErrors.password}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Password Again</Form.Label>

        <Form.Control
          isInvalid={!!formErrors.passwordAgain}
          type='password'
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
        {formErrors.passwordAgain && (
          <Form.Control.Feedback type='invalid'>
            {formErrors.passwordAgain}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <Button variant='primary' block type='submit'>
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
