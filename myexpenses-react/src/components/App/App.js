import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from "../Login";
import Main from "../Main";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={props => (
                    this.props.authenticated ? <Main {...props} /> : <Redirect to='/login' />
                )} />,
                <Route path='/login' render={props => (
                    this.props.authenticated ? <Redirect to='/' /> : <Login {...props} />
                )} />
            </Switch>
        );
    }
}

function mapStateToProps({ auth }) {
    return { authenticated: auth.authenticated };
}

export default withRouter(connect(mapStateToProps)(App));
