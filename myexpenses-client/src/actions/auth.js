import { AUTH_USER, UNAUTH_USER } from '../types/auth.types';

export function authUser() {
  return function(dispatch) {
    dispatch({ type: AUTH_USER });
  };
}

export function unauthUser() {
  return { type: UNAUTH_USER };
}
