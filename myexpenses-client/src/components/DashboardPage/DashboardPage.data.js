// import { get } from '../../http';
//
// export const getDashboardStats = () => get('/stats');

export const getDashboardStats = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(dashboardStats), 1400);
  });
};

const dashboardStats = [
  {
    name: 'Daily stats',
    limit: 200,
    spent: 400
  },
  {
    name: 'Montly stats',
    limit: 3500,
    spent: 1560
  }
];
