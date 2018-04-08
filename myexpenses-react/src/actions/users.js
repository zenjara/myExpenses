import axios from 'axios';
import LocalStorage from '../utils/localStorage';
import {
    FETCH_USER,
    FETCH_LIMIT
} from './types';

export function fetchUser() {
    const token = LocalStorage.getAccessToken();

    return function(dispatch) {
        axios.get('http://159.89.190.11/api/me', { headers: { 'Authorization': `Bearer ${token}` } })
            .then(response => {
                dispatch({ type: FETCH_USER, payload: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    };
}

export function setLimit(limit, limitType) {
    const token = LocalStorage.getAccessToken();

    // Hard-coded currencyId for now
    const limitData = { amount: limit, currencyId: 1 };

    // Hard-coded currencyId for now
    // let limitData = new URLSearchParams();
    // limitData.append('amount', limit);
    // limitData.append('currencyId', '1');

    return function(dispatch) {
        axios.post(`http://159.89.190.11/api/${limitType}-limit`, limitData, { headers: { 'Authorization': `Bearer ${token}`} })
            .then(response => {
                dispatch({ type: FETCH_LIMIT });
            })
            .catch(error => {
                console.log(error);
            });
    }
}