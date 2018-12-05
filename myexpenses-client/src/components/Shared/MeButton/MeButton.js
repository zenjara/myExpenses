import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './MeButton.styles';

class MeButton extends Component {
  render() {
    const { text, classes, onClick } = this.props;

    return (
      <button className={classes.meButton} {...onClick && { onClick }}>
        <span className={classes.meButtonText}>{text ? text : null}</span>
      </button>
    );
  }
}

MeButton.defaultProps = {
  height: '36px'
};

MeButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(MeButton);
