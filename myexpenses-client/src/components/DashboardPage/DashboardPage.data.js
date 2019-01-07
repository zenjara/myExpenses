import { get } from '../../http';

export const getDashboardMetrics = () => get('/metrics');
