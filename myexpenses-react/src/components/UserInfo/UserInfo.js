import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    renderUserBasics() {
        if(Object.keys(this.props.user).length) {
            return (
                <div className="user-basics">
                    <h3>{this.props.user.username}</h3>
                    <p>{this.props.user.email}</p>
                </div>
            );
        } else {
            return <CircularProgress />;
        }
    }

    render() {
        return (
            <div className="main-window__user-info">
                <h2 className="user-info__header">User info</h2>
                <div className="user-info__content">
                    <Card className="info-card">
                        {this.renderUserBasics()}
                        <hr/>
                        <div className="user-limits">
                            <div className="user-limit user-limit--daily">
                                <div className="limit-header">Daily limit:</div>
                                <div className="limit-body">{this.props.user.daily_limit || '0'}</div>
                            </div>
                            <div className="user-limit user-limit--monthly">
                                <div className="limit-header">Monthly limit:</div>
                                <div className="limit-body">{this.props.user.monthly_limit || '0'}</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ user }) {
    return { user: user.user };
}

export default connect(mapStateToProps)(UserInfo);