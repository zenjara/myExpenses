class LocalStorage {

    // static getAccessToken() {
    //     return localStorage.getItem('access_token');
    // }

    static setAccessToken(token) {
        localStorage.setItem('access_token', token);
    }

    // static clearToken() {
    //     localStorage.removeItem('access_token');
    // }

}

export default LocalStorage;