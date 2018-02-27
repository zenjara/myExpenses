import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userLogout } from "../../actions/auth/login";

class Main extends Component {
    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        this.props.userLogout();
    }

    render() {
        return (
            <div className="main-wrapper">
                <header className="main-app__header">
                    <div className="header-title">MyExpenses</div>
                </header>
                <div className="main-app__sidebar">
                    <div className="sidebar-wrapper">
                        <div className="sidebar-user">John Doe</div>
                        <div className="sidebar-navigation">
                            <ul>
                                <li>
                                    <a><i className="zmdi zmdi-view-dashboard zmdi-hc-lg"></i> Dashboard</a>
                                </li>
                                <li>
                                    <a><i className="zmdi zmdi-money-box zmdi-hc-lg"></i> Expenses</a>
                                </li>
                                <li>
                                    <a><i className="zmdi zmdi-account zmdi-hc-lg"></i> Profile</a>
                                </li>
                                <li>
                                    <a onClick={this.handleLogoutClick}><i className="zmdi zmdi-power zmdi-hc-lg"></i> Log out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-app__content"></div>
            </div>
        );
    }
}

export default connect(null, { userLogout })(Main);