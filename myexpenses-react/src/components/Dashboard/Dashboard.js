import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-window__dashboard">
                <div className="dashboard__header">
                    <h2>Dashboard</h2>
                </div>
                <div className="dahsboard__content">
                </div>
            </div>
        );
    }
}

export default Dashboard;