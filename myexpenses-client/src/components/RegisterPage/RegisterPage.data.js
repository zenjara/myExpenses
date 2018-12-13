import axios from 'axios';
import Configuration from '../../configuration';

const instance = axios.create({
  baseURL: `${Configuration.backendEndpoint}/api/v1`,
  timeout: 60000
});

export const register = (name, email, password) =>
  instance.post('/register', { name, email, password });
