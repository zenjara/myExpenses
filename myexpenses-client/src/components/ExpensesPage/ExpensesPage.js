import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { getCategories, getExpenses, createExpense } from './ExpensePage.data';
import PlusIcon from '../Shared/Icons/PlusIcon';
import MeModal from '../Shared/MeModal';
import MeCard from '../Shared/MeCard';
import { MODAL_NEW } from '../../types/modal.types';
import LoadingSpinner from '../Shared/Icons/LoadingSpinner';
import styles from './ExpensesPage.styles';

class ExpensesPage extends Component {
  constructor(props) {
    super(props);

    this.handleHideModal = this.handleHideModal.bind(this);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.onExpenseCreate = this.onExpenseCreate.bind(this);

    this.state = {
      loading: true,
      currentModal: null,
      expenses: [],
      categories: []
    };
  }

  componentDidMount() {
    getCategories().then(categories => {
      getExpenses().then(expenses =>
        this.setState({ categories, expenses, loading: false })
      );
    });
  }

  onExpenseCreate(expense) {
    const requestData = {
      amount: expense.expenseAmount,
      currency: 'HRK',
      date: new Date().toLocaleDateString(),
      description: expense.expenseDescription,
      expense_category_id: expense.expenseCategory
    };

    createExpense(requestData).then(res =>
      this.setState({ expenses: [res, ...this.state.expenses] })
    );
    this.handleHideModal();
  }

  handleHideModal() {
    this.setState({ currentModal: null });
  }

  handleShowModal(modal) {
    this.setState({ currentModal: modal });
  }

  sortExpenses(expenses) {
    return expenses.sort((prev, next) => (prev.date < next.date ? 1 : -1));
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

  renderExpenseRow(expense) {
    const { classes } = this.props;
    const { categories } = this.state;

    return (
      <tr key={`${expense.id}`}>
        <td className={classes}>{`${expense.amount} ${expense.currency}`}</td>
        <td>{new Date(expense.date).toLocaleDateString()}</td>
        <td>
          {
            categories.find(category => {
              return category.id === expense.expense_category_id;
            }).name
          }
        </td>
        <td>{expense.description || '\u2014'}</td>
      </tr>
    );
  }

  renderExpensesList() {
    const { classes } = this.props;
    const { expenses } = this.state;

    const sortedExpenses = this.sortExpenses(expenses);

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
            {sortedExpenses.map(expense => this.renderExpenseRow(expense))}
          </tbody>
        </table>
      </div>
    );
  }

  renderEmptyState() {
    const { classes } = this.props;

    return (
      <div className={classes.emptyWrapper}>
        <span>
          You haven't added any expense. Click on the ➕ button in the bottom
          right corner to add new expense.
        </span>
      </div>
    );
  }

  renderExpenses() {
    return this.state.expenses.length ? (
      <MeCard>{this.renderExpensesList()}</MeCard>
    ) : (
      this.renderEmptyState()
    );
  }

  renderLoadingState() {
    const { classes } = this.props;

    return (
      <div className={classes.loadingWrapper}>
        <LoadingSpinner />
      </div>
    );
  }

  render() {
    const { classes } = this.props;
    const { currentModal, loading } = this.state;

    return (
      <div className={classes.expensesPage}>
        <h2 className={classes.expensesPageTitle}>Expenses</h2>
        {loading ? this.renderLoadingState() : this.renderExpenses()}
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
