class LocalStorage {
  static getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  static setAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  static getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  static setRefreshToken(token) {
    localStorage.setItem('refreshToken', token);
  }

  static clearTokens() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}

export default LocalStorage;
