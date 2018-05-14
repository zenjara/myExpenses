import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, fetchCurrencies } from '../../actions/users';
import { fetchCategories, fetchCurrentExpenses } from '../../actions/expenses';

import Sidebar from '../Sidebar';
import MainWindow from '../MainWindow';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchCategories();
        this.props.fetchCurrencies();
        this.props.fetchCurrentExpenses();
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

export default connect(null, { fetchUser, fetchCategories, fetchCurrencies, fetchCurrentExpenses })(Main);