import React, { Component } from 'react';
import injectSheet from 'react-jss';

import styles from './UploadPage.styles';

class UploadPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.uploadPage}>
        <h2 className={classes.uploadPageTitle}>Upload</h2>
      </div>
    );
  }
}

export default injectSheet(styles)(UploadPage);
