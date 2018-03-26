import axios from 'axios';
import LocalStorage from '../utils/localStorage';
import {
    FETCH_EXPENSES
} from './types';

export function fetchExpenses() {
    const token = LocalStorage.getAccessToken();

    return function(dispatch) {
        axios.get('http://159.89.190.11/api/expenses', { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                dispatch({ type: FETCH_EXPENSES, payload: response.data.items });
            })
            .catch(error => {
                console.log(error);
            });
    };
}