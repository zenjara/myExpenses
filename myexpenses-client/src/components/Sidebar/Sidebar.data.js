import { get } from '../../http';

export const getUserProfile = () => get('/me');
