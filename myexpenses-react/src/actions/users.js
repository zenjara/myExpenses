import Request from "../utils/request";
import axios from 'axios';
import { logoutUponInvalidRefresh } from "./auth/login";
import {
    FETCH_USER,
    FETCH_LIMITS,
    FETCH_CURRENCY
} from './types';

export function fetchUser() {
    return function(dispatch) {
        Request.authorizedRequest().get('/me')
            .then(response => {
                const dailyLimit = response.data.dailyLimit.amount;
                const monthlyLimit = response.data.monthlyLimit.amount;

                dispatch({ type: FETCH_USER, payload: response.data });
                dispatch({ type: FETCH_LIMITS, payload: { dailyLimit, monthlyLimit } });
            })
            .catch(error => {
              console.log(error);
                // logoutUponInvalidRefresh(error.response.status, dispatch);
            });
    };
}

export function fetchCurrencies() {
    return function(dispatch) {
        Request.authorizedRequest().get('/currencies')
            .then(response => {
                dispatch({ type: FETCH_CURRENCY, payload: response.data });
            })
            .catch(error => {
                // logoutUponInvalidRefresh(error.response.status, dispatch);
            });
    }
}

export function setLimits(dailyLimit, monthlyLimit) {
    // Hard-coded currencyId for now
    const dailyData = { amount: dailyLimit, currencyId: 1 };
    const monthlyData = { amount: monthlyLimit, currencyId: 1 };

    return function(dispatch) {
        axios.all([setLimitRequest('daily', dailyData), setLimitRequest('monthly', monthlyData)])
            .then(axios.spread(function (dailyResponse, monthlyResponse) {
                const dailyLimit = dailyResponse.data.amount;
                const monthlyLimit = monthlyResponse.data.amount;

                dispatch({ type: FETCH_LIMITS, payload: { dailyLimit, monthlyLimit } });
            }))
            .catch(error => {
                logoutUponInvalidRefresh(error.response.status, dispatch);
            });
    }
}

function setLimitRequest(limitType, limitData) {
    return Request.authorizedRequest().post(`/${limitType}-limit`, limitData);
}
