import { post } from '../../http';

export const setLimit = (limitType, limitData) =>
  post(`/${limitType}_limit`, limitData);
