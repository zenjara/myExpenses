import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { setLimits } from "../../actions/users";

class UserInfo extends Component {
    constructor(props) {
        super(props);

        const { daily, monthly } = props.user;

        this.state = { cardEditable: false, dailyLimit: daily || 0, monthlyLimit: monthly || 0, currenyCurrency: null };
        this.handleChangeClick = this.handleChangeClick.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
        this.handleLimitChange = this.handleLimitChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentDidMount() {
        if(Object.keys(this.props.user).length) {
            const { dailyLimit, monthlyLimit } = this.props.user;

            this.setState({
                dailyLimit: dailyLimit.amount,
                monthlyLimit: monthlyLimit.amount
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.limits) {
            this.setState({
                dailyLimit: nextProps.limits.dailyLimit,
                monthlyLimit: nextProps.limits.monthlyLimit,
                cardEditable: false
            });
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
            dailyLimit: this.props.limits.dailyLimit,
            monthlyLimit: this.props.limits.monthlyLimit,
            currentCurrency: this.props.user.dailyLimit.currency.id
        });
    }

    handleSubmitClick() {
        this.props.setLimits(this.state.dailyLimit, this.state.monthlyLimit);
    }

    handleChangeClick() {
        this.setState({ cardEditable: true });
    }

    handleSelectChange() {

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
        const { dailyLimit, monthlyLimit } = this.props.limits;
        const { currencies } = this.props;

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
                                        <div className="limit-body">{dailyLimit ? dailyLimit : '0'}</div>
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
                                        <div className="limit-body">{monthlyLimit ? monthlyLimit : '0'}</div>
                                    }
                                </div>
                            </div>
                            <div className="user-currency">
                                <div>Currency:</div>
                                {/*TODO - sredi vamo*/}
                                { false && this.state.cardEditable && Object.keys(currencies).length ?
                                    <SelectField
                                        id="currency"
                                        value={this.state.currentCurrency}
                                        onChange={this.handleSelectChange}
                                    >
                                        { Object.keys(currencies).map(id => {
                                            const currency = currencies[id];
                                            return <MenuItem value={currency.id} label={currency.code} primaryText={`${currency.name}: ${currency.code}`} key={currency.id} />
                                        })}
                                    </SelectField>
                                        :
                                    <div className="limit-body">{ this.props.user.dailyLimit ? this.props.user.dailyLimit.currency.code : null}</div>
                                }
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

function mapStateToProps({ user, limits, currencies }) {
    return {
        user,
        limits,
        currencies
    };
}

export default connect(mapStateToProps, { setLimits })(UserInfo);