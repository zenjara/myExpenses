import { AUTH_USER, UNAUTH_USER } from '../types/auth.types';

export const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return state;
  }
};
