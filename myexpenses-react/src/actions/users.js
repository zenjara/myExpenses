import axios from 'axios';
import LocalStorage from '../utils/localStorage';
import {
    FETCH_USER
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