import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { getUserProfile } from '../Sidebar/Sidebar.data';
import { setLimit } from './ProfilePage.data';
import LoadingSpinner from '../Shared/Icons/LoadingSpinner';
import MeCard from '../Shared/MeCard/MeCard';
import MeButton from '../Shared/MeButton/MeButton';
import styles from './ProfilePage.styles';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.handleOnClickSubmit = this.handleOnClickSubmit.bind(this);
    this.state = { loading: true, user: {}, submitDisabled: true };
  }

  componentDidMount() {
    this.fetchProfileData();
  }

  fetchProfileData() {
    this.setState({ loading: true, submitDisabled: true });
    getUserProfile().then(res =>
      this.setState({
        loading: false,
        user: res,
        dailyLimit: res.daily_limit.amount,
        monthlyLimit: res.monthly_limit.amount
      })
    );
  }

  handleOnClickSubmit() {
    const { dailyLimit, monthlyLimit, user } = this.state;

    if (user.daily_limit.amount !== dailyLimit) {
      const dailyRequestData = { amount: dailyLimit };
      setLimit('daily', dailyRequestData).then(() => {
        if (user.monthly_limit.amount === monthlyLimit) {
          this.fetchProfileData();
        }
      });
    }

    if (user.monthly_limit.amount !== monthlyLimit) {
      const monthlyRequestData = { amount: monthlyLimit };
      setLimit('monthly', monthlyRequestData).then(() =>
        this.fetchProfileData()
      );
    }
  }

  toggleSubmit() {
    const { dailyLimit, monthlyLimit, user } = this.state;

    if (
      user.daily_limit.amount !== dailyLimit ||
      user.monthly_limit.amount !== monthlyLimit
    ) {
      this.setState({ submitDisabled: false });
    } else {
      this.setState({ submitDisabled: true });
    }
  }

  renderLimits() {
    const { classes } = this.props;
    const { dailyLimit, monthlyLimit } = this.state;

    return (
      <div className={classes.infoRow}>
        <div className={classes.profileField}>
          <label>DAILY LIMIT</label>
          <input
            type="number"
            value={dailyLimit}
            className={classes.regularInput}
            onChange={event => {
              this.setState({ dailyLimit: Number(event.target.value) }, () =>
                this.toggleSubmit()
              );
            }}
          />
        </div>
        <div className={classes.profileField}>
          <label>MONTHLY LIMIT</label>
          <input
            type="number"
            value={monthlyLimit}
            className={classes.regularInput}
            onChange={event => {
              this.setState({ monthlyLimit: Number(event.target.value) }, () =>
                this.toggleSubmit()
              );
            }}
          />
        </div>
      </div>
    );
  }

  renderPageContent() {
    const { classes } = this.props;
    const { user, submitDisabled } = this.state;

    return (
      <MeCard title={'Account Information'}>
        <div className={classes.infoRow}>
          <div className={classes.profileField}>
            <label>NAME</label>
            <input
              type="text"
              value={user.name}
              className={classes.disabledInput}
              onChange={event => {
                let user = { ...this.state.user };
                user.name = event.target.value;
                this.setState({ user });
              }}
              disabled
            />
          </div>
        </div>
        <hr className={classes.infoSeparator} />
        <div className={classes.infoRow}>
          <div className={classes.profileField}>
            <label>EMAIL</label>
            <input
              type="text"
              value={user.email}
              className={classes.disabledInput}
              disabled
            />
          </div>
        </div>
        <div className={classes.accountNotice}>
          Due to security reasons, we do not allow changing your email address.
          If you wish to update it, please contact our support.
        </div>
        <hr className={classes.infoSeparator} />
        {this.renderLimits()}
        <hr className={classes.infoSeparator} />
        <MeButton
          text="Save changes"
          purple
          disabled={submitDisabled}
          onClick={this.handleOnClickSubmit}
        />
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
    const { loading } = this.state;

    return (
      <div className={classes.profilePage}>
        <h2 className={classes.profilePageTitle}>Profile</h2>
        {loading ? this.renderLoadingState() : this.renderPageContent()}
      </div>
    );
  }
}

export default injectSheet(styles)(ProfilePage);
