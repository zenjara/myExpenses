import axios from 'axios';
// import Request from '../../utils/request';
import LocalStorage from '../../utils/localStorage';
import {
    AUTH_USER,
    UNAUTH_USER,
    LOGGING_USER,
    RESET_LOGGING_USER
} from "../types";

export function userLogin({ email, password }) {
    return function(dispatch) {
        const userData = { _username: email, _password: password };

        // Request.baseRequest().post('/login_check', userData)
        dispatch({ type: LOGGING_USER });
        axios.post('http://159.89.190.11/api/login_check', userData)
            .then(response => {
                LocalStorage.setAccessToken(response.data.token);
                dispatch({ type: RESET_LOGGING_USER });
                dispatch({ type: AUTH_USER });
            })
            .catch(error => {
               console.log(error);
            });
    };
}

export function userLogout() {
    LocalStorage.clearToken();
    return {
        type: UNAUTH_USER
    };
}