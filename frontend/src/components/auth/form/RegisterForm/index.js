import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import register from '../../../../lib/auth/redux/thunks/register';
import authSelectors from '../../../../lib/auth/redux/selector';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import authActions from '../../../../lib/auth/redux/actions';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const errors = useSelector(authSelectors.getRegisterErrors);

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
          <Alert variant="danger" key={index}>
            {err}
          </Alert>
        ))}
      </div>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="john@doe.com"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      {formErrors.email && <Alert variant="danger">{formErrors.email}</Alert>}

      <Form.Group>
        <Form.Label>Password</Form.Label>

        <Form.Control
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      {formErrors.password && (
        <Alert variant="danger">{formErrors.password}</Alert>
      )}

      <Form.Group>
        <Form.Label>Password Again</Form.Label>

        <Form.Control
          type="password"
          onChange={(e) => setPasswordAgain(e.target.value)}
        />
      </Form.Group>
      {formErrors.passwordAgain && (
        <Alert variant="danger">{formErrors.passwordAgain}</Alert>
      )}

      <Button variant="primary" block type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
