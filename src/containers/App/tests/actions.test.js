import {
  CHANGE_INPUT_VALUE,
  CHANGE_SEARCH_ENGINE,
  FETCH_RESULTS,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_ERROR,
  CLEAR_RESULTS,
} from '../constants';

import {
  changeInputValue,
  changeSearchEngine,
  fetchResults,
  fetchResultsSuccess,
  fetchResultsError,
  clearResults,
} from '../actions';

describe('App actions', () => {
  describe('changeInputValue', () => {
    it('should return the correct type', () => {
      const result = { type: CHANGE_INPUT_VALUE };
      expect(changeInputValue()).toEqual(result);
    });
  });
  describe('changeSearchEngine', () => {
    it('should return the correct type', () => {
      const result = { type: CHANGE_SEARCH_ENGINE };
      expect(changeSearchEngine()).toEqual(result);
    });
  });
  describe('fetchResults', () => {
    it('should return the correct type', () => {
      const result = { type: FETCH_RESULTS };
      expect(fetchResults()).toEqual(result);
    });
  });
  describe('fetchResultsSuccess', () => {
    it('should return the correct type', () => {
      const result = { type: FETCH_RESULTS_SUCCESS };
      expect(fetchResultsSuccess()).toEqual(result);
    });
  });
  describe('fetchResultsError', () => {
    it('should return the correct type', () => {
      const result = { type: FETCH_RESULTS_ERROR };
      expect(fetchResultsError()).toEqual(result);
    });
  });
  describe('clearResults', () => {
    it('should return the correct type', () => {
      const result = { type: CLEAR_RESULTS };
      expect(clearResults()).toEqual(result);
    });
  });
});
