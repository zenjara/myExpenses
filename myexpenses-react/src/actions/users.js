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

export function setLimits(dailyLimit, monthlyLimit) {
    const token = LocalStorage.getAccessToken();

    // Hard-coded currencyId for now
    const dailyData = { amount: dailyLimit, currencyId: 1 };
    const monthlyData = { amount: monthlyLimit, currencyId: 1 };

    return function(dispatch) {
        axios.all([setLimitRequest('daily', dailyData, token), setLimitRequest('monthly', monthlyData, token)])
            .then(axios.spread(function (dailyResponse, monthlyResponse) {
                // debugger
                dispatch({ type: FETCH_LIMIT });
            }));
    }
}

function setLimitRequest(limitType, limitData, token) {
    return axios.post(`http://159.89.190.11/api/${limitType}-limit`, limitData, { headers: { 'Authorization': `Bearer ${token}`} });
}
