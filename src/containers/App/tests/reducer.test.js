import {
  changeInputValue,
  changeSearchEngine,
  fetchResults,
  fetchResultsSuccess,
  fetchResultsError,
  clearResults,
  fetchResultsPaged,
} from '../actions';
import reducer from '../reducer';

describe('Simple Alert Reducer', () => {
  let state = {
    q: '',
    loading: false,
    searchEngine: 'any',
    error: '',
    google: {
      q: '',
      offset: 0,
      results: [],
      loading: false,
    },
    bing: {
      q: '',
      offset: 0,
      results: [],
      loading: false,
    },
  };

  let newState = state;

  afterEach(() => {
    state = newState;
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it('should handle CHANGE_INPUT_VALUE', () => {
    newState = reducer(state, changeInputValue('test'));
    expect(newState).toEqual({
      ...state,
      q: 'test',
      error: '',
    });
  });

  it('should handle CHANGE_SEARCH_ENGINE', () => {
    newState = reducer(state, changeSearchEngine('google'));
    expect(newState).toEqual({
      ...state,
      searchEngine: 'google',
      error: '',
    });
  });

  it('should handle FETCH_RESULTS', () => {
    newState = reducer(state, fetchResults());
    expect(newState).toEqual({
      ...state,
      loading: true,
      google: {
        q: state.q,
        offset: 0,
        results: [],
      },
      bing: {
        q: state.q,
        offset: 0,
        results: [],
      },
      error: '',
    });
  });

  it('should handle FETCH_RESULTS_PAGED', () => {
    newState = reducer(state, fetchResultsPaged({ SE: 'Google' }));
    expect(newState).toEqual({
      ...state,
      ...state,
      google: {
        ...state.google,
        loading: true,
      },
      bing: {
        ...state.bing,
        loading: false,
      },
    });
  });

  it('should handle FETCH_RESULTS_SUCCESS', () => {
    newState = reducer(
      state,
      fetchResultsSuccess({
        google: {
          q: 'test',
          results: [],
          offset: 1,
          totalResults: 0,
        },
        bing: {
          q: 'test',
          results: [],
          offset: 1,
          totalResults: 0,
        },
      })
    );
    expect(newState).toEqual({
      ...state,
      loading: false,
      q: '',
      google: {
        ...state.google,
        q: 'test',
        results: [],
        offset: 1,
        totalResults: 0,
        loading: false,
      },
      bing: {
        ...state.bing,
        q: 'test',
        results: [],
        offset: 1,
        totalResults: 0,
        loading: false,
      },
    });
  });

  it('should handle FETCH_RESULTS_ERROR', () => {
    newState = reducer(state, fetchResultsError('error'));
    expect(newState).toEqual({
      ...state,
      loading: false,
      error: 'error',
    });
  });

  it('should handle CLEAR_RESULTS', () => {
    newState = reducer(state, clearResults());
    expect(newState).toEqual({
      ...state,
      google: {
        ...state.google,
        results: [],
      },
      bing: {
        ...state.bing,
        results: [],
      },
    });
  });
});
