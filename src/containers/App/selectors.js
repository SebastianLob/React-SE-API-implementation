export const searchEngineSelector = (state) => state.global.searchEngine;
export const qSelector = (state) => state.global.q;
export const googleStateSelector = (state) => state.global.google;
export const bingStateSelector = (state) => state.global.bing;
export const appLoadingSelector = (state) => state.global.loading;
export const OffsetsSelector = (state) => ({
  google: state.global.google.offset,
  bing: state.global.bing.offset,
});
export const SEStateSelector = (state) => ({
  google: state.global.google,
  bing: state.global.bing,
});
