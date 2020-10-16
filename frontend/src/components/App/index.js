import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//
import Login from '../Auth/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
