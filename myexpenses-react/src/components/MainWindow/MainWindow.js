import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import Dashboard from '../Dashboard';
import UserInfo from '../UserInfo';
import Expenses from '../Expenses';
import Upload from '../UploadSheet';

class MainWindow extends Component {

    render() {
        return (
            <div className="main-app__window">
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route path='/me' component={UserInfo} />
                    <Route path='/expenses' component={Expenses} />
                    <Route path='/upload' component={Upload} />
                </Switch>
            </div>
        );
    }
}

export default MainWindow;