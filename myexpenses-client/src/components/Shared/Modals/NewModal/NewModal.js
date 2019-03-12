import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import moment from 'moment';

import MeCard from '../../MeCard';
import MeButton from '../../MeButton';
import MeSelect from '../../MeSelect';
import MeDatepicker from '../../MeDatepicker';
import ArrowDownIcon from '../../Icons/ArrowDownIcon';
import styles from './NewModal.styles';

class NewModal extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      expenseAmount: '',
      expenseCategory: null,
      expenseDescription: '',
      expenseDate: moment(new Date()),
      expenseDateFocused: false
    };
  }

  handleFormSubmit() {
    const {
      expenseAmount,
      expenseCategory,
      expenseDescription,
      expenseDate
    } = this.state;

    this.props.createExpense({
      expenseAmount,
      expenseCategory,
      expenseDescription,
      expenseDate
    });
  }

  handleSelectChange(expenseCategory) {
    this.setState({ expenseCategory });
  }

  handleInputChange(value, inputType) {
    let newState = { ...this.state };
    newState[inputType] = value;

    this.setState(newState);
  }

  render() {
    const { classes, hideModal, categories } = this.props;
    const {
      expenseAmount,
      expenseDescription,
      expenseDate,
      expenseDateFocused
    } = this.state;

    const categoryOptions = categories.map(({ id, name }) => ({
      value: id,
      label: name
    }));

    return (
      <MeCard>
        <form onSubmit={this.handleFormSubmit}>
          <div className={classes.modalBody}>
            <div className={classes.modalBodyContent}>
              <div className={classes.modalBodyTitle}>New Expense</div>
              <div className={classes.fieldInputs}>
                <div className={classes.formField}>
                  <label>EXPENSE AMOUNT</label>
                  <input
                    type="number"
                    placeholder="Add expense amount"
                    className={classes.modalInput}
                    value={expenseAmount}
                    onChange={event => {
                      this.handleInputChange(
                        event.target.value,
                        'expenseAmount'
                      );
                    }}
                    autoFocus
                  />
                </div>
                <div className={classes.formField}>
                  <label>EXPENSE CATEGORY</label>
                  <MeSelect
                    width="240px"
                    isClearable
                    options={categoryOptions}
                    placeholder="Select category"
                    onChange={option => this.handleSelectChange(option.value)}
                  />
                </div>
              </div>
              <div className={classes.formField}>
                <label>DATE</label>
                <MeDatepicker
                  date={expenseDate}
                  focused={expenseDateFocused}
                  onDateChange={date => this.setState({ expenseDate: date })}
                  onFocusChange={({ focused }) =>
                    this.setState({ expenseDateFocused: focused })
                  }
                  customInputIcon={
                    <ArrowDownIcon color="rgba(0, 0, 0, 0.25)" opacity="1" />
                  }
                  inputIconPosition="after"
                  hideKeyboardShortcutsPanel
                  placeholder=""
                  numberOfMonths={1}
                  block
                  readOnly
                  isOutsideRange={() => false}
                />
              </div>
              <div className={classes.formField}>
                <label>EXPENSE DESCRIPTION</label>
                <textarea
                  className={classes.modalTextarea}
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
              <MeButton text="ADD" type="submit" purple width="80px" />
            </div>
          </div>
        </form>
      </MeCard>
    );
  }
}

NewModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  createExpense: PropTypes.func
};

export default injectSheet(styles)(NewModal);
