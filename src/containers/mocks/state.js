export const state = {
  global: {
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
  },
  alert: {
    open: false,
    type: 'danger',
    title: '',
    message: '',
  },
};
