import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../LoginPage';
import MainLayout from '../MainLayout';

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={MainLayout} />
    </Switch>
  );
};

export default App;
