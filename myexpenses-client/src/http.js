import axios from 'axios';
import Configuration from './configuration';
import LocalStorage from './localStorage';

const accessToken = () => LocalStorage.getAccessToken();

const instance = axios.create({
  baseURL: `${Configuration.backendEndpoint}/api/v1`,
  timeout: 60000
});

instance.interceptors.request.use(
  function(config) {
    config.headers['Authorization'] = `Bearer ${accessToken()}`;
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    return response.data;
  },
  function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx

      if (error.response.status === 401) {
        LocalStorage.clearTokens();
      }
      // window.location.href = '/login'

      //*** REFRESH TOKEN LOGIC - when refresh token gets implemented ***//
      // let originalRequest = error.config;
      // if (error.response.status === 401 && !originalRequest._retry) {
      //   originalRequest._retry = true;
      //   const refreshToken = LocalStorage.getRefreshToken();
      //
      //   instance
      //     .post('/token/refresh', { refresh_token: refreshToken })
      //     .then(res => {
      //       LocalStorage.setAccessToken(res.data.token);
      //       LocalStorage.setRefreshToken(res.data.refresh_token);
      //
      //       originalRequest.headers['Authorization'] = `Bearer ${
      //         res.data.token
      //       }`;
      //       return axios(originalRequest);
      //     });
      // }
    }
  }
);

export function get(url, config) {
  return instance.get(url, config);
}

export function post(url, data, config) {
  return instance.post(url, data, config);
}
