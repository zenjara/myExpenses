import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Login from "../Login";
import Main from "../Main";

class App extends Component {
    render() {
        return (
            <IntlProvider locale={'en'}>
                <Switch>
                    <Route path='/login' render={props => (
                        this.props.authenticated ? <Redirect to='/' /> : <Login {...props} />
                    )} />
                    <Route path='/' render={props => (
                        this.props.authenticated ? <Main {...props} /> : <Redirect to='/login' />
                    )} />,
                </Switch>
            </IntlProvider>
        );
    }
}

function mapStateToProps({ auth }) {
    return { authenticated: auth.authenticated };
}

export default withRouter(connect(mapStateToProps)(App));
