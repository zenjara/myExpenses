import { get } from '../../http';

export const getDashboardMatrics = () => get('/metrics');
