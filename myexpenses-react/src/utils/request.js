import axios from 'axios';
import LocalStorage from './localStorage';

const ROOT_URL = 'http://159.89.190.11/api';

class Request {

    static baseRequest() {
        return axios.create({
            baseURL: ROOT_URL
        });
    }

    static authorizedRequest() {
        const accessToken = LocalStorage.getAccessToken();
        let instance = this.baseRequest();
        instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        instance.interceptors.response.use(function(response) {
            return response;
        }, function(error) {
            const originalRequest = error.config;

            if(error.request.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                const refreshToken = LocalStorage.getRefreshToken();

                return Request.baseRequest().post('/token/refresh', { refresh_token: refreshToken })
                    .then(response => {
                        LocalStorage.setAccessToken(response.data.token);
                        LocalStorage.setRefreshToken(response.data.refresh_token);

                        originalRequest.headers['Authorization'] = `Bearer ${response.data.token}`;
                        return axios(originalRequest);
                    });
            }

            return Promise.reject(error);
        });

        return instance;
    }

}

export default Request;