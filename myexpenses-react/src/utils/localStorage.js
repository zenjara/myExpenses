class LocalStorage {

    static getAccessToken() {
        return localStorage.getItem('access_token');
    }

    static setAccessToken(token) {
        localStorage.setItem('access_token', token);
    }

    static getRefreshToken() {
        return localStorage.getItem('refresh_token');
    }

    static setRefreshToken(token) {
        localStorage.setItem('refresh_token', token);
    }

    static clearTokens() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }

}

export default LocalStorage;