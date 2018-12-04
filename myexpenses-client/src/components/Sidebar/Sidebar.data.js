// import { get } from '../../http';
//
// export const getUserProfile = () => get('/me');

export const getUserProfile = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(userInfo), 1400);
  });
};

const userInfo = {
  id: 2,
  name: 'Kristijan',
  email: 'korac.kristijan@gmail.com',
  daily_limit: null,
  monthly_limit: null
};
