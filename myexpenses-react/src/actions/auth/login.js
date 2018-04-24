import Request from '../../utils/request';
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

        dispatch({ type: LOGGING_USER });
        Request.baseRequest().post('/login_check', userData)
            .then(response => {
                LocalStorage.setAccessToken(response.data.token);
                LocalStorage.setRefreshToken(response.data.refresh_token);
                dispatch({ type: RESET_LOGGING_USER });
                dispatch({ type: AUTH_USER });
            })
            .catch(error => {
               console.log(error);
            });
    };
}

export function userLogout() {
    LocalStorage.clearTokens();
    return {
        type: UNAUTH_USER
    };
}