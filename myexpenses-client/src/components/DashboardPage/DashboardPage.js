import React, { Component, Fragment } from 'react';
import injectSheet from 'react-jss';

import { getDashboardMetrics } from './DashboardPage.data';
import MeCard from '../Shared/MeCard';
import BarChart from './BarChart/BarChart';
import LoadingSpinner from '../Shared/Icons/LoadingSpinner';
import styles from './DashboardPage.styles';

// TODO - implement blank daily/monthly Limits (error appears when new user logs in)

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      dailyLimit: null,
      dailyExpenses: null,
      monthlyLimit: null,
      monthlyExpenses: null,
      expenseCategories: {}
    };
  }

  componentDidMount() {
    getDashboardMetrics().then(res => {
      const { dailyLimit, dailyExpenses, monthlyLimit, monthlyExpenses } = res;

      const xData = Object.values(res.expense_categories);
      const yData = Object.keys(res.expense_categories);

      const expenseCategories = { xData, yData };

      this.setState({
        dailyLimit,
        dailyExpenses,
        monthlyLimit,
        monthlyExpenses,
        expenseCategories,
        loading: false
      });
    });
  }

  renderStatCard(title, limit, expenses) {
    const { classes } = this.props;

    return (
      <MeCard title={title} shadow>
        <div className={classes.limitStatsWrapper}>
          <div className={classes.limitStat}>
            <div className={classes.statLabel}>Limit</div>
            <div className={classes.statValue}>{limit} kn</div>
          </div>
          <div className={classes.limitStat}>
            <div className={classes.statLabel}>Spent</div>
            <div className={classes.statValue}>{expenses} kn</div>
          </div>
          <hr className={classes.statSeparator} />
          <div className={classes.limitStat}>
            <div className={classes.statLabel}>Balance</div>
            <div className={classes.statValue}>{limit - expenses} kn</div>
          </div>
        </div>
      </MeCard>
    );
  }

  renderLoadingState() {
    const { classes } = this.props;

    return (
      <div className={classes.loadingWrapper}>
        <LoadingSpinner />
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const {
      loading,
      dailyLimit,
      dailyExpenses,
      monthlyLimit,
      monthlyExpenses,
      expenseCategories
    } = this.state;

    const dailyStatsTitle = `Daily stats (${new Date().toLocaleString('us', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })})`;
    const monthlyStatsTitle = `Monthly stats (${new Date().toLocaleString(
      'us',
      {
        month: 'short',
        year: 'numeric'
      }
    )})`;

    return (
      <div className={classes.dashboardPage}>
        <h2 className={classes.dashboardPageTitle}>Dashboard</h2>
        <div className={classes.dashboardPageContent}>
          {loading ? (
            this.renderLoadingState()
          ) : (
            <Fragment>
              <div className={classes.dashboardStats}>
                <div className={classes.dailyStatsWrapper}>
                  {this.renderStatCard(
                    dailyStatsTitle,
                    dailyLimit,
                    dailyExpenses
                  )}
                </div>
                <div className={classes.monthlyStatsWrapper}>
                  {this.renderStatCard(
                    monthlyStatsTitle,
                    monthlyLimit,
                    monthlyExpenses
                  )}
                </div>
              </div>
              <div className={classes.dashboardMetrics}>
                <BarChart data={expenseCategories} />
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(DashboardPage);
