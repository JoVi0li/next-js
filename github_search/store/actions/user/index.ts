import  { SEARCH_USER } from '../index';

export const searchUser = (username: string) => ({
  type: SEARCH_USER,
  payload: username
});

