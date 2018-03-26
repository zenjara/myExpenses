import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { userLogout } from '../../actions/auth/login';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLogoutClick() {
        this.props.userLogout();
    }

    render() {
        return (
            <div className="main-app__sidebar">
                <div className="sidebar-wrapper">
                    <div className="sidebar-user">John Doe</div>
                    <div className="sidebar-navigation">
                        <ul>
                            <li>
                                <NavLink exact to='/' activeClassName="selected"><i className="zmdi zmdi-view-dashboard zmdi-hc-lg"></i> Dashboard</NavLink>
                            </li>
                            <li>
                                <a><i className="zmdi zmdi-money-box zmdi-hc-lg"></i> Expenses</a>
                            </li>
                            <li>
                                <NavLink to='/me' activeClassName="selected"><i className="zmdi zmdi-account zmdi-hc-lg"></i> Profile</NavLink>
                            </li>
                            <li>
                                <a onClick={this.handleLogoutClick}><i className="zmdi zmdi-power zmdi-hc-lg"></i> Log out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(null, { userLogout })(Sidebar));