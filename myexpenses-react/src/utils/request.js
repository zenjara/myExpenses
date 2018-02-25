import axios from 'axios';
// import LocalStorage from './localStorage';

const ROOT_URL = 'http://159.89.190.11/api';

class Request {

    static baseRequest() {
        return axios.create({
            baseUrl: ROOT_URL
        });
    }

    // static authorizedRequest() {  }

}

export default Request;