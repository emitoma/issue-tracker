import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//
import Login from '../../../pages/auth/login';
import Projects from '../../../pages/projects';
import authSelectors from '../../../lib/auth/redux/selector';
import initAuth from '../../../lib/auth/redux/thunks/init-auth';
import ProtectedRoute from '../../common/ProtectedRoute';
import IssueList from '../../../pages/projects/[id]';
import IndexPage from '../../../pages';

const App = () => {
  const dispatch = useDispatch();
  const isAuthInitialized = useSelector(authSelectors.getIsInitialized);

  useEffect(() => {
    dispatch(initAuth());
    //eslint-disable-next-line
  }, []);

  if (!isAuthInitialized) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <IndexPage />
        </Route>
        <Route path={['/auth/login', '/auth/register']}>
          <Login />
        </Route>

        <ProtectedRoute path="/projects/:id">
          <IssueList />
        </ProtectedRoute>
        <ProtectedRoute path="/projects">
          <Projects />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};
export default App;
