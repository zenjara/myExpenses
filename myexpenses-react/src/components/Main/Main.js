import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/users';
import { fetchCurrencies } from '../../actions/users';

import Sidebar from '../Sidebar';
import MainWindow from '../MainWindow';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchCurrencies();
    }

    render() {
        return (
            <div className="main-wrapper">
                <header className="main-app__header">
                    <div className="header-title">MyExpenses</div>
                </header>
                <Sidebar />
                <MainWindow />
            </div>
        );
    }
}

export default connect(null, { fetchUser, fetchCurrencies })(Main);