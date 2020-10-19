import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//
import Login from '../../pages/auth/login/index';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
        <Route path="/auth/register">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
