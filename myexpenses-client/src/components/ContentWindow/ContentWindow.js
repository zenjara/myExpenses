import React from 'react';
import injectSheet from 'react-jss';
import { Route, Switch } from 'react-router-dom';

import DashboardPage from '../DashboardPage';
import ExpensesPage from '../ExpensesPage';
import ProfilePage from '../ProfilePage';
import UploadPage from '../UploadPage';
import styles from './ContentWindow.styles';

const ContentWindow = props => {
  const { classes } = props;

  return (
    <div className={classes.contentWindow}>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route path="/expenses" component={ExpensesPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/upload" component={UploadPage} />
      </Switch>
    </div>
  );
};
export default injectSheet(styles)(ContentWindow);
