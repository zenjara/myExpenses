import axios from 'axios';
import LocalStorage from '../utils/localStorage';
import {
    FETCH_EXPENSES
} from './types';

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