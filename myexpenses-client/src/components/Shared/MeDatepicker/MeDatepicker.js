import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './MeDatepicker.styles';

class MeDatepicker extends Component {
  render() {
    const { classes, ...datepickerProps } = this.props;

    return <SingleDatePicker {...datepickerProps} />;
  }
}

MeDatepicker.defaultProps = {
  displayFormat: 'MMM D, YYYY'
};

MeDatepicker.propTypes = {
  classes: PropTypes.object.isRequired,
  date: PropTypes.object,
  focused: PropTypes.bool,
  onDateChange: PropTypes.func,
  onFocusChange: PropTypes.func,
  customInputIcon: PropTypes.element,
  inputIconPosition: PropTypes.string,
  hideKeyboardShortcutsPanel: PropTypes.bool,
  displayFormat: PropTypes.string,
  placeholder: PropTypes.string,
  numberOfMonths: PropTypes.number,
  readOnly: PropTypes.bool,
  isOutsideRange: PropTypes.func,
  showClearDate: PropTypes.bool,
  block: PropTypes.bool
};

export default injectSheet(styles)(MeDatepicker);
