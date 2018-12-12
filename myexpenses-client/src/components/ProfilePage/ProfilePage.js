import React, { Component } from 'react';
import injectSheet from 'react-jss';

import styles from './ProfilePage.styles';

class ProfilePage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.profilePage}>
        <h2 className={classes.profilePageTitle}>Profile</h2>
      </div>
    );
  }
}

export default injectSheet(styles)(ProfilePage);
