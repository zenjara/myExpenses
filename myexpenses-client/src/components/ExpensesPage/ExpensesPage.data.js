import { get, post, remove } from '../../http';

export const createExpense = expenseData => post('/expenses', expenseData);

export const getExpenses = () => get('/expenses');

export const deleteExpense = id => remove(`/expenses/${id}`);
