import React from 'react';
import { NavLink } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AuthHeader = () => {
  return (
    <Row>
      <Col>
        <NavLink
          to="/auth/register"
          className="auth-link"
          activeClassName="active"
        >
          Register
        </NavLink>
      </Col>
      <Col>
        <NavLink
          to="/auth/login"
          className="auth-link"
          activeClassName="active"
        >
          Login
        </NavLink>
      </Col>
    </Row>
  );
};

export default AuthHeader;
