import {
  CHANGE_INPUT_VALUE,
  CHANGE_SEARCH_ENGINE,
  FETCH_RESULTS,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_ERROR,
  CLEAR_RESULTS,
} from './constants';

export const changeInputValue = (payload) => {
  return { type: CHANGE_INPUT_VALUE, payload };
};
export const changeSearchEngine = (payload) => {
  return { type: CHANGE_SEARCH_ENGINE, payload };
};
export const fetchResults = (payload) => {
  return { type: FETCH_RESULTS, payload };
};
export const fetchResultsSuccess = (payload) => {
  return { type: FETCH_RESULTS_SUCCESS, payload };
};
export const fetchResultsError = (payload) => {
  return { type: FETCH_RESULTS_ERROR, payload };
};
export const clearResults = (payload) => {
  return { type: CLEAR_RESULTS, payload };
};
