import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { getDashboardStats } from './DashboardPage.data';
import MeCard from '../Shared/MeCard';
import LoadingSpinner from '../Shared/Icons/LoadingSpinner';
import styles from './DashboardPage.styles';

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      stats: []
    };
  }

  componentDidMount() {
    getDashboardStats().then(res =>
      this.setState({ stats: res, loading: false })
    );
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
    const { loading, stats } = this.state;

    return (
      <div className={classes.dashboardPage}>
        <h2 className={classes.dashboardPageTitle}>Dashboard</h2>
        <div className={classes.dashboardPageContent}>
          {loading ? (
            this.renderLoadingState()
          ) : (
            <div className={classes.dashboardStats}>
              <div className={classes.dailyStatsWrapper}>
                {this.renderStatCard('Daily stats', 200, 400)}
              </div>
              <div className={classes.monthlyStatsWrapper}>
                {this.renderStatCard('Monthly stats', 3500, 1560)}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default injectSheet(styles)(DashboardPage);
