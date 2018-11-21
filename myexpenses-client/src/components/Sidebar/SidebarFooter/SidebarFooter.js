import React, { Component } from 'react';
import injectSheet from 'react-jss';

import SidebarArrowIcon from '../../Shared/Icons/SidebarArrowIcon';
import SidebarItem from '../SidebarItem';
import withHover from '../../Shared/HOCs/withHover';
import LogoutIcon from '../../Shared/Icons/LogoutIcon';
import userDefaultAvatar from '../../../assets/images/user-avatar-default.png';
import styles from './SidebarFooter.styles';

class SidebarFooter extends Component {
  constructor(props) {
    super(props);

    this.handleOnClickFooter = this.handleOnClickFooter.bind(this);
  }

  handleOnClickFooter() {
    this.props.handleOnClickFooter();
  }

  renderFooterItems() {
    const { classes, versionNumber, isNavActive } = this.props;
    const LogoutItem = withHover(SidebarItem(LogoutIcon));

    return (
      <div>
        <LogoutItem
          text="LOG OUT"
          onClick={this.handleLogout}
          isNavActive={isNavActive}
          isLink={false}
        />
        <div className={classes.footerVersionSeparator} />
        <div className={classes.footerVersionNumber}>v{versionNumber}</div>
      </div>
    );
  }

  renderUserName() {
    const { user } = this.props;

    if (!Object.keys(user).length) return null;

    return user.name[0].toUpperCase() + user.name.slice(1);
  }

  renderUserAvatar() {
    const { user } = this.props;

    return user && user.avatar ? user.avatar : userDefaultAvatar;
  }

  renderFooterContent() {
    const { classes } = this.props;

    return (
      <div
        className={classes.sidebarFooterPrimary}
        onClick={this.handleOnClickFooter}
      >
        <img
          src={this.renderUserAvatar()}
          alt="User avatar"
          className={classes.sidebarAvatar}
        />
        <span className={classes.sidebarUserName}>{this.renderUserName()}</span>
        <SidebarArrowIcon />
      </div>
    );
  }

  renderLoadingFooter() {
    const { classes } = this.props;

    return (
      <div className={classes.sidebarFooterPrimary}>
        <span className={classes.avatarPlaceholder} />
        <span className={classes.usernamePlaceholder} />
      </div>
    );
  }

  render() {
    const { classes, isFooterOpen, loading } = this.props;

    return (
      <div className={classes.sidebarFooter}>
        {loading ? this.renderLoadingFooter() : this.renderFooterContent()}
        <div className={classes.sidebarFooterSecondary}>
          {isFooterOpen ? this.renderFooterItems() : null}
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(SidebarFooter);
