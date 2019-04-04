import { get, remove, post } from '../../http';

export const getCategories = () => get('/expense_categories');

export const createCategory = categoryData =>
  post('/expense_categories', categoryData);

export const deleteCategory = id => remove(`/expense_categories/${id}`);
