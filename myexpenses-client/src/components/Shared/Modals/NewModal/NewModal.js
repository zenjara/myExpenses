import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import MeCard from '../../MeCard';
import MeButton from '../../MeButton';
import styles from './NewModal.styles';

class NewModal extends Component {
  constructor(props) {
    super(props);

    this.handleOnKeyboardPress = this.handleOnKeyboardPress.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);

    this.state = {
      expenseAmount: '',
      expenseCategory: '',
      expenseDescription: ''
    };
  }

  handleOnKeyboardPress(event) {
    if (event.keyCode === 13) {
      this.handleActionClick();
    }
  }

  handleActionClick() {
    const { expenseAmount, expenseCategory, expenseDescription } = this.state;

    this.props.createExpense({
      expenseAmount,
      expenseCategory,
      expenseDescription
    });
  }

  handleInputChange(value, inputType) {
    let newState = { ...this.state };
    newState[inputType] = value;

    this.setState(newState);
  }

  render() {
    const { classes, hideModal } = this.props;
    const { expenseAmount, expenseCategory, expenseDescription } = this.state;

    return (
      <MeCard>
        <div className={classes.modalBody}>
          <div className={classes.modalBodyContent}>
            <div className={classes.modalBodyTitle}>New Expense</div>
            <div className={classes.fieldInputs}>
              <div className={classes.formField}>
                <label>EXPENSE AMOUNT</label>
                <input
                  type="number"
                  className={classes.modalInput}
                  value={expenseAmount}
                  onChange={event => {
                    this.handleInputChange(event.target.value, 'expenseAmount');
                  }}
                />
              </div>
              <div className={classes.formField}>
                <label>EXPENSE CATEGORY</label>
                <input
                  className={classes.modalInput}
                  value={expenseCategory}
                  onChange={event => {
                    this.handleInputChange(
                      event.target.value,
                      'expenseCategory'
                    );
                  }}
                />
              </div>
            </div>
            <div className={classes.formField}>
              <label>EXPENSE DESCRIPTION</label>
              <textarea
                className={classes.modalInput}
                value={expenseDescription}
                onChange={event => {
                  this.handleInputChange(
                    event.target.value,
                    'expenseDescription'
                  );
                }}
                rows="7"
              />
            </div>
          </div>
          <div className={classes.modalActions}>
            <MeButton text="CANCEL" onClick={hideModal} />
            <MeButton
              text="ADD"
              purple
              width="80px"
              onClick={this.handleActionClick}
            />
          </div>
        </div>
      </MeCard>
    );
  }
}

NewModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  createExpense: PropTypes.func
};

export default injectSheet(styles)(NewModal);
