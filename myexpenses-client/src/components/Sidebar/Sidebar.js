import React, { Component, Fragment } from 'react';
import { matchPath } from 'react-router-dom';
import injectSheet from 'react-jss';

import { getUserProfile } from './Sidebar.data';
import packageJson from '../../../package.json';
import SidebarItem from './SidebarItem';
import LogoMyExpenses from '../Shared/Icons/LogoMyExpenses';
import SidebarFooter from './SidebarFooter';
import withHover from '../Shared/HOCs/withHover/withHover';
import DashboardsIcon from '../Shared/Icons/DashboardsIcon';
import ExpensesIcon from '../Shared/Icons/ExpensesIcon';
import UserIcon from '../Shared/Icons/UserIcon';
import UploadIcon from '../Shared/Icons/UploadIcon';
import styles from './Sidebar.styles';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleOnClickFooter = this.handleOnClickFooter.bind(this);
    this.isNavActive = this.isNavActive.bind(this);
    this.state = {
      loading: true,
      isFooterOpen: false,
      user: {}
    };
  }

  componentDidMount() {
    getUserProfile().then(res => this.setState({ loading: false, user: res }));
  }

  handleOnClickFooter() {
    this.setState({ isFooterOpen: !this.state.isFooterOpen });
  }

  isNavActive(path) {
    const isActive = matchPath(path, {
      path: this.props.match.url,
      exact: true
    });

    return !!isActive;
  }

  renderSidebarItems() {
    const DashboardsItem = withHover(SidebarItem(DashboardsIcon));
    const ExpensesItem = withHover(SidebarItem(ExpensesIcon));
    const ProfileItem = withHover(SidebarItem(UserIcon));
    const UploadItem = withHover(SidebarItem(UploadIcon));

    return (
      <Fragment>
        <DashboardsItem
          text="DASHBOARD"
          href="/"
          isNavActive={this.isNavActive}
        />
        <ExpensesItem
          text="EXPENSES"
          href="/expenses"
          isNavActive={this.isNavActive}
        />
        <ProfileItem
          text="PROFILE"
          href="/profile"
          isNavActive={this.isNavActive}
        />
        <UploadItem
          text="UPLOAD"
          href="/upload"
          isNavActive={this.isNavActive}
        />
      </Fragment>
    );
  }

  render() {
    const { classes } = this.props;
    const { user, isFooterOpen, loading } = this.state;

    return (
      <div className={classes.sidebar}>
        <div className={classes.sidebarLogo}>
          <LogoMyExpenses size={115} />
        </div>
        <div className={classes.sidebarItems}>{this.renderSidebarItems()}</div>
        <SidebarFooter
          handleOnClickFooter={this.handleOnClickFooter}
          isFooterOpen={isFooterOpen}
          user={user}
          loading={loading}
          versionNumber={packageJson.version}
          isNavActive={this.isNavActive}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default injectSheet(styles)(Sidebar);
