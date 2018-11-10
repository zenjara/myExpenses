import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import injectSheet from 'react-jss';

import Sidebar from '../Sidebar';
import styles from './MainLayout.styles';

class MainLayout extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.mainLayout}>
        <Route path="*" component={Sidebar} />
        {/*<ContentWindow />*/}
      </div>
    );
  }
}
export default injectSheet(styles)(MainLayout);
