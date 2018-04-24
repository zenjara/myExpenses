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
            console.log(error);
        });

        return instance;
    }

}

export default Request;