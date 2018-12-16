import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './MeButton.styles';

class MeButton extends Component {
  render() {
    const { text, classes, onClick, type } = this.props;

    return (
      <button
        className={classes.meButton}
        {...onClick && { onClick }}
        type={type}
      >
        <span className={classes.meButtonText}>{text ? text : null}</span>
      </button>
    );
  }
}

MeButton.defaultProps = {
  height: '36px',
  type: 'button'
};

MeButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(MeButton);
