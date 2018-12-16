import { get, post, httpDelete } from '../../http';

export const createExpense = expenseData => post('/expenses', expenseData);

export const getExpenses = () => get('/expenses');

export const deleteExpense = id => httpDelete(`/expenses/${id}`);
