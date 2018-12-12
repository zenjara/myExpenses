import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card, { CardHeader } from 'material-ui/Card';

class Dashboard extends Component {

    render() {
        const { dailyLimit, monthlyLimit, expensesDailyTotal, expensesMonthlyTotal, currentCurrency } = this.props;
        const dailyBalance = dailyLimit - expensesDailyTotal;
        const monthlyBalance = monthlyLimit - expensesMonthlyTotal;

        const currencyCode = currentCurrency ? currentCurrency.currency.code : '';

        return (
            <div className="main-window__dashboard">
                <div className="dashboard__header">
                    <h2>Dashboard</h2>
                </div>
                <div className="dashboard__content">
                    <div className="dashboard__content__cards">
                        <Card className="dashboard__card">
                            <CardHeader
                                title="Daily Stats"
                                style={{
                                    padding: '12px 14px'
                                }}
                                titleStyle={{
                                    color: '#999',
                                    fontSize: '18px'
                                }}
                            />
                            <div className="dashboard__card__content">
                                <div className="card-stat limit">
                                    <h4>Limit</h4>
                                    <h3>{dailyLimit || 0} {currencyCode}</h3>
                                </div>
                                <div className="card-stat spent">
                                    <h4>Spent</h4>
                                    <h3>{expensesDailyTotal || 0} {currencyCode}</h3>
                                </div>
                                <hr/>
                                <div className={`card-stat balance ${ dailyBalance < 0 ? 'balance--negative' : '' }`}>
                                    <h4>Balance</h4>
                                    <h3>{dailyBalance || 0} {currencyCode}</h3>
                                </div>
                            </div>
                        </Card>
                        <Card className="dashboard__card">
                            <CardHeader
                                title="Monthly Stats"
                                style={{
                                    padding: '12px 14px'
                                }}
                                titleStyle={{
                                    color: '#999',
                                    fontSize: '18px'
                                }}
                            />
                            <div className="dashboard__card__content">
                                <div className="card-stat limit">
                                    <h4>Limit</h4>
                                    <h3>{monthlyLimit || 0} {currencyCode}</h3>
                                </div>
                                <div className="card-stat spent">
                                    <h4>Spent</h4>
                                    <h3>{expensesDailyTotal || 0} {currencyCode}</h3>
                                </div>
                                <hr/>
                                <div className={`card-stat balance ${ monthlyBalance < 0 ? 'balance--negative' : '' }`}>
                                    <h4>Balance</h4>
                                    <h3>{monthlyBalance || 0} {currencyCode}</h3>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ limits, user }) {
    const { dailyLimit, monthlyLimit } = limits;
    const { expensesDailyTotal, expensesMonthlyTotal, dailyLimit: currency } = user;

    return {
        dailyLimit,
        monthlyLimit,
        expensesDailyTotal,
        expensesMonthlyTotal,
        currentCurrency: currency
    };
}

export default connect(mapStateToProps)(Dashboard);