import { get, post } from '../../http';

export const createExpense = expenseData => post('/expenses', expenseData);

export const getExpenses = () => get('/expenses');

export const getCategories = () => get('/expense_categories');
