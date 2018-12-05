import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { getExpenses } from './ExpensePage.data';
import PlusIcon from '../Shared/Icons/PlusIcon';
import MeModal from '../Shared/MeModal';
import MeCard from '../Shared/MeCard';
import { MODAL_NEW } from '../../types/modal.types';
import styles from './ExpensesPage.styles';

class ExpensesPage extends Component {
  constructor(props) {
    super(props);

    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.onExpenseCreate = this.onExpenseCreate.bind(this);

    this.state = {
      currentModal: null,
      expenses: []
    };
  }

  componentDidMount() {
    getExpenses().then(expenses => this.setState({ expenses }));
  }

  onExpenseCreate(expense) {
    // createExpense(expense)
    console.log('Success', { expense });
    this.handleHideModal();
  }

  handleHideModal() {
    this.setState({ currentModal: null });
  }

  handleShowModal(modal) {
    this.setState({ currentModal: modal });
  }

  renderNewModal() {
    return (
      <MeModal
        modalType={MODAL_NEW}
        width="640px"
        hideModal={this.handleHideModal}
        createExpense={this.onExpenseCreate}
      />
    );
  }

  renderExpensesList() {
    const { classes } = this.props;
    const { expenses } = this.state;

    return (
      <div className={classes.expensesList}>
        <table className={classes.expensesTable}>
          <thead>
            <tr>
              <th className={classes.headerAmount}>Amount</th>
              <th className={classes.headerCategory}>Category</th>
              <th className={classes.headerDescription}>Description</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={`${expense.id}`}>
                <td className={classes}>{expense.amount}</td>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { currentModal } = this.state;

    return (
      <div className={classes.expensesPage}>
        <h2 className={classes.expensesPageTitle}>Expenses</h2>
        <MeCard>{this.renderExpensesList()}</MeCard>
        <div
          className={classes.addButton}
          onClick={() => this.handleShowModal(MODAL_NEW)}
        >
          <PlusIcon />
        </div>
        {currentModal === MODAL_NEW ? this.renderNewModal() : null}
      </div>
    );
  }
}

export default injectSheet(styles)(ExpensesPage);
