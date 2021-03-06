import Request from "../utils/request";
import { reset } from "redux-form";
import { logoutUponInvalidRefresh } from "./auth/login";
import {
    FETCH_CATEGORIES,
    FETCH_EXPENSES,
    NEW_EXPENSE,
    SUBMITTING_EXPENSE,
    RESET_SUBMITTING_EXPENSE,
    FETCH_TOTAL_EXPENSES
} from './types';

export function fetchCategories() {
    return function(dispatch) {
        Request.authorizedRequest().get('/expense_categories')
            .then(response => {
                dispatch({ type: FETCH_CATEGORIES, payload: response.data });
            })
            .catch(error => {
                logoutUponInvalidRefresh(error.response.status, dispatch);
            });
    };
}

export function fetchCurrentExpenses() {
    return function(dispatch) {
        Request.authorizedRequest().get('/expenses')
            .then(response => {
                // dispatch({ type: FETCH_TOTAL_EXPENSES, payload: response.data });
            })
            .catch(error => {
                debugger
                logoutUponInvalidRefresh(error.response.status, dispatch);
            });
    }
}

export function fetchExpenses() {
    return function(dispatch, getState) {
        const page = getState().expenses.nextPage;

        Request.authorizedRequest().get(`/expenses?page=${page}`)
            .then(response => {
                dispatch({ type: FETCH_EXPENSES, payload: response.data });
            })
            .catch(error => {
                // logoutUponInvalidRefresh(error.response.status, dispatch);
            });
    };
}

export function submitNewExpense({ amount, category, currency, description }) {
    return function(dispatch) {
        const expenseData = {
            amount,
            description,
            expenseCategoryId: category,
            currencyId: currency
        };

        dispatch({ type: SUBMITTING_EXPENSE });
        Request.authorizedRequest().post('/expenses', expenseData)
            .then(response => {
                dispatch({ type: RESET_SUBMITTING_EXPENSE });
                dispatch({ type: NEW_EXPENSE, payload: response.data });
                dispatch(reset('NewExpenseForm'));
            })
            .catch(error => {
                logoutUponInvalidRefresh(error.response.status, dispatch);
            });
    };
}