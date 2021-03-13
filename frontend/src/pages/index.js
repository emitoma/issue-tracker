import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../lib/auth/redux/selector';
import projectSelectors from '../lib/project/redux/selector';

const IndexPage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const isLoading = useSelector(projectSelectors.getIsLoading);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isLoggedIn) {
    return <Redirect to="/projects" />;
  } else {
    return <Redirect to="/auth/login" />;
  }
};

export default IndexPage;
