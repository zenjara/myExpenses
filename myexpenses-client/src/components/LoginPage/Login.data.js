import axios from 'axios';
import Configuration from '../../configuration';

const instance = axios.create({
  baseURL: `${Configuration.backendEndpoint}/api/v1`,
  timeout: 60000
});

export const login = (email, password) =>
  instance.post('/login', { email, password });
