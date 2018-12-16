import { get, post } from '../../http';

export const getCategories = () => get('/expense_categories');

export const createCategory = categoryData =>
  post('/expense_categories', categoryData);
