import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//
import Login from '../../../pages/auth/login';
import Projects from '../../../pages/projects';
import authSelectors from '../../../lib/auth/redux/selector';
import initAuth from '../../../lib/auth/redux/thunks/init-auth';
import ProtectedRoute from '../../common/ProtectedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isAuthInitialized = useSelector(authSelectors.getIsInitialized);

  useEffect(() => {
    dispatch(initAuth());
  }, []);

  if (!isAuthInitialized) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <Switch>
        <Route path={['/auth/login', '/auth/register']}>
          <Login />
        </Route>

        <ProtectedRoute path="/projects">
          <Projects />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};
export default App;
