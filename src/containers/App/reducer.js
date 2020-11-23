import {
  CHANGE_INPUT_VALUE,
  CHANGE_SEARCH_ENGINE,
  FETCH_RESULTS,
  FETCH_RESULTS_PAGED,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_ERROR,
  CLEAR_RESULTS,
} from './constants';

const initialState = {
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        q: action.payload,
        error: '',
      };
    case CHANGE_SEARCH_ENGINE:
      return {
        ...state,
        searchEngine: action.payload,
        error: '',
      };
    case FETCH_RESULTS:
      return {
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
      };
    case FETCH_RESULTS_PAGED:
      return {
        ...state,
        google: {
          ...state.google,
          loading: action.payload.SE === 'Google',
        },
        bing: {
          ...state.bing,
          loading: action.payload.SE === 'Bing',
        },
      };
    case FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        q: '',
        google: {
          ...state.google,
          ...action.payload.google,
          loading: false,
        },
        bing: {
          ...state.bing,
          ...action.payload.bing,
          loading: false,
        },
      };
    case FETCH_RESULTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_RESULTS:
      return {
        ...state,
        google: {
          ...state.google,
          results: [],
        },
        bing: {
          ...state.bing,
          results: [],
        },
      };
    default:
      return state;
  }
};

export default reducer;
