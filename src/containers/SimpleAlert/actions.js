import { SHOW_ALERT, HIDE_ALERT } from './constants';

export const showAlert = (payload) => {
  return { type: SHOW_ALERT, payload };
};

export const hideAlert = () => {
  return { type: HIDE_ALERT };
};
