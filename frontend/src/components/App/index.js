import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//
import Login from '../../pages/auth/login/index';
import Projects from '../../pages/projects/index';

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
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
