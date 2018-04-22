import axios from 'axios';
import LocalStorage from '../utils/localStorage';
import { reset } from "redux-form";
import {
    FETCH_CATEGORIES,
    FETCH_EXPENSES,
    NEW_EXPENSE,
    SUBMITTING_EXPENSE,
    RESET_SUBMITTING_EXPENSE
} from './types';

export function fetchCategories() {
    const token = LocalStorage.getAccessToken();

    return function(dispatch) {
        axios.get(`http://159.89.190.11/api/expense-categories`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                dispatch({ type: FETCH_CATEGORIES, payload: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function fetchExpenses() {
    const token = LocalStorage.getAccessToken();

    return function(dispatch, getState) {
        const page = getState().expenses.nextPage;

        axios.get(`http://159.89.190.11/api/expenses?page=${page}`, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                dispatch({ type: FETCH_EXPENSES, payload: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function submitNewExpense({ amount, category, currency, description }) {
    const token = LocalStorage.getAccessToken();

    return function(dispatch) {
        const expenseData = {
            amount,
            description,
            expenseCategoryId: category,
            currencyId: currency
        };

        dispatch({ type: SUBMITTING_EXPENSE });
        axios.post(`http://159.89.190.11/api/expenses`, expenseData, { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                dispatch({ type: RESET_SUBMITTING_EXPENSE });
                dispatch({ type: NEW_EXPENSE, payload: response.data });
                dispatch(reset('NewExpenseForm'));
            })
            .catch(error => {
                console.log(error);
            });
    };
}