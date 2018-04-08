import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import { setLimit } from "../../actions/users";

class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.state = { cardEditable: false, dailyLimit: 0, monthlyLimit: 0 };
        this.handleChangeClick = this.handleChangeClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleLimitChange = this.handleLimitChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.user) {
            this.setState({ dailyLimit: nextProps.user.daily_limit, monthlyLimit: nextProps.user.monthly_limit })
        }

        if(nextProps.limitSet) {
            // debugger
            // TODO - set limits to response data
            this.setState({ cardEditable: false });
        }
    }

    handleLimitChange(e) {
        let newState = {};
        newState[e.target.id] = e.target.value;
        this.setState(newState);
    }

    handleCancelClick() {
        this.setState({
            cardEditable: false,
            dailyLimit: this.props.user.daily_limit,
            monthlyLimit: this.props.user.monthly_limit
        });
    }

    handleSubmitClick() {
        this.props.setLimit(this.state.dailyLimit, 'daily');
        // this.props.setLimit(this.state.monthlyLimit, 'monthly');
    }

    handleChangeClick() {
        this.setState({ cardEditable: true });
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
                        <div className="user-settings">
                            <div className="user-limits">
                                <div className="user-limit user-limit--daily">
                                    <div className="limit-header">Daily limit:</div>
                                    { this.state.cardEditable ?
                                        <TextField
                                            id="dailyLimit"
                                            type="number"
                                            style={{ width: 'auto' }}
                                            value={this.state.dailyLimit || '0'}
                                            onChange={this.handleLimitChange}
                                        /> :
                                        <div className="limit-body">{this.props.user.daily_limit || '0'}</div>
                                    }
                                </div>
                                <div className="user-limit user-limit--monthly">
                                    <div className="limit-header">Monthly limit:</div>
                                    { this.state.cardEditable ?
                                        <TextField
                                            id="monthlyLimit"
                                            type="number"
                                            style={{ width: 'auto' }}
                                            value={this.state.monthlyLimit || '0'}
                                            onChange={this.handleLimitChange}
                                        /> :
                                        <div className="limit-body">{this.props.user.monthly_limit || '0'}</div>
                                    }
                                </div>
                            </div>
                            <div className="user-currency">

                            </div>
                        </div>
                        <div className="user-info__card-actions">
                            { this.state.cardEditable ?
                                (
                                    [
                                        <FlatButton label="Cancel" secondary={true} className="card-btn" onClick={this.handleCancelClick} key="cancel-btn" />,
                                        <RaisedButton label="Submit" primary={true} className="card-btn" onClick={this.handleSubmitClick} key="submit-btn" />
                                    ]
                                ) :
                                <RaisedButton label="Change" secondary={true} className="card-btn" onClick={this.handleChangeClick} />
                            }
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ user }) {
    return {
        user: user.user,
        limitSet: user.limitSet
    };
}

export default connect(mapStateToProps, { setLimit })(UserInfo);