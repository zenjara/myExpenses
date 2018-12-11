import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { getCategories, getExpenses, createExpense } from './ExpensePage.data';
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
      expenses: [],
      categories: []
    };
  }

  componentDidMount() {
    getCategories().then(categories => {
      getExpenses().then(expenses => this.setState({ categories, expenses }));
    });
  }

  onExpenseCreate(expense) {
    const requestData = {
      amount: expense.expenseAmount,
      currency: 'HRK',
      date: new Date().toLocaleDateString(),
      expense_category_id: expense.expenseCategory
    };

    createExpense(requestData);
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
        categories={this.state.categories}
      />
    );
  }

  renderExpensesList() {
    const { classes } = this.props;
    const { expenses, categories } = this.state;

    return (
      <div className={classes.expensesList}>
        <table className={classes.expensesTable}>
          <thead>
            <tr>
              <th className={classes.headerAmount}>Amount</th>
              <th className={classes.headerDate}>Date</th>
              <th className={classes.headerCategory}>Category</th>
              <th className={classes.headerDescription}>Description</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(expense => (
              <tr key={`${expense.id}`}>
                <td className={classes}>{`${expense.amount} ${
                  expense.currency
                }`}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
                <td>
                  {
                    categories.find(category => {
                      console.log(category.id);
                      console.log(expense.expense_category_id);
                      return category.id === expense.expense_category_id;
                    }).name
                  }
                </td>
                <td>{expense.description || '\u2014'}</td>
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
