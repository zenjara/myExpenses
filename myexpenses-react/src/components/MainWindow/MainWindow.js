import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import UserInfo from '../UserInfo';
import Expenses from '../Expenses';

class MainWindow extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="main-app__window">
                <Switch>
                    <Route path='/me' component={UserInfo} />
                    <Route path='/expenses' component={Expenses} />
                </Switch>
            </div>
        );
    }
}

export default MainWindow;