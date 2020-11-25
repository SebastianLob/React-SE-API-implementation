import { SHOW_ALERT, HIDE_ALERT } from '../constants';

import { showAlert, hideAlert } from '../actions';

describe('Simple Alert actions', () => {
  describe('showAlert', () => {
    it('should return the correct type', () => {
      const result = { type: SHOW_ALERT };
      expect(showAlert()).toEqual(result);
    });
  });
  describe('hideAlert', () => {
    it('should return the correct type', () => {
      const result = { type: HIDE_ALERT };
      expect(hideAlert()).toEqual(result);
    });
  });
});
