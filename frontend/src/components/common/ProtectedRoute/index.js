import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
//
import authSelectors from '../../../lib/auth/redux/selector';

const ProtectedRoute = (props) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isAuthInitialized = useSelector(authSelectors.getIsInitialized);

  if (!isAuthInitialized) {
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect to="/auth/login" />;
  }

  return <Route {...props} />;
};

export default memo(ProtectedRoute);
