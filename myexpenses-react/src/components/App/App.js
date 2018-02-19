import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from "../Login";

class App extends Component {
    render() {
        return [
            //<Route exact path='/' component={Login} key='dashboard' />,
            <Route path='/login' component={Login} key='login' />
        ];
    }
}

export default App;
