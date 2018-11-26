import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Switch } from 'react-router-dom';

import styles from './ContentWindow.styles';

class ContentWindow extends Component {
  render() {
    return (
      <Switch>
        {/*<Route exact path="/" component={DashboardPage} />*/}
        {/*<Route path="/expenses" component={ExpensesPage} />*/}
        {/*<Route path="/profile" component={ProfilePage} />*/}
        {/*<Route path="/upload" component={UploadPage} />*/}
      </Switch>
    );
  }
}
export default injectSheet(styles)(ContentWindow);
