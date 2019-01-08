import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import MainLayout from '../MainLayout';

const App = props => {
  return (
    <Switch>
      <Route
        path="/login"
        render={routeProps =>
          props.authenticated ? (
            <Redirect to="/" />
          ) : (
            <LoginPage {...routeProps} />
          )
        }
      />
      <Route
        path="/register"
        render={routeProps =>
          props.authenticated ? (
            <Redirect to="/" />
          ) : (
            <RegisterPage {...routeProps} />
          )
        }
      />
      <Route
        path="/"
        render={routeProps =>
          props.authenticated ? (
            <MainLayout {...routeProps} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </Switch>
  );
};

function mapStateToProps({ auth }) {
  return { authenticated: auth.authenticated };
}

export default withRouter(connect(mapStateToProps)(App));
