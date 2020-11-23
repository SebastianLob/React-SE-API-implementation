import { takeLatest, put, select } from 'redux-saga/effects';
import { FETCH_RESULTS, FETCH_RESULTS_PAGED } from './constants';
import {
  searchEngineSelector,
  qSelector,
  OffsetsSelector,
  SEStateSelector,
} from './selectors';
import { GoogleGet, BingGet } from '../../api/get';
import { fetchResultsSuccess } from './actions';
import { parseBingData, parseGoogleData } from './parseSEData';
import { showAlert } from '../SimpleAlert/actions';

export default function* SearcherSaga() {
  yield takeLatest(FETCH_RESULTS, fetchResults);
  yield takeLatest(FETCH_RESULTS_PAGED, fetchResultsPaged);
}

function* fetchResults() {
  const q = yield select(qSelector);
  const searchEngine = yield select(searchEngineSelector);
  const payload = yield search({ searchEngine, q });
  yield put(fetchResultsSuccess(payload));
}

function* fetchResultsPaged(action) {
  const actualOffset = yield select(OffsetsSelector);
  const actualState = yield select(SEStateSelector);
  if (action.payload.offset === actualOffset[action.payload.SE.toLowerCase()]) {
    yield put(fetchResultsSuccess(actualState));
    return;
  }
  const payload = yield search({
    searchEngine: action.payload.SE.toLowerCase(),
    q: action.payload.q,
    offset: action.payload.offset,
  });
  yield put(fetchResultsSuccess(payload));
}

function* search({ searchEngine, q, offset = 0 }) {
  let payload = {
    google: {},
    bing: {},
  };

  let googleResults = [];
  let bingResults = [];
  if (searchEngine === 'google' || searchEngine === 'any') {
    try {
      googleResults = yield GoogleGet(q, offset);
      if (googleResults.data.items)
        payload.google = {
          q: q,
          results: parseGoogleData(googleResults),
          offset,
          totalResults: googleResults.data.searchInformation.totalResults,
        };
    } catch (error) {
      yield displayError(error);
    }
  }
  if (searchEngine === 'bing' || searchEngine === 'any') {
    try {
      bingResults = yield BingGet(q, offset);
      if (bingResults.data.webPages)
        payload.bing = {
          q: q,
          results: parseBingData(bingResults),
          offset,
          totalResults: bingResults.data.webPages.totalEstimatedMatches,
        };
    } catch (error) {
      yield displayError(error);
    }
  }

  return payload;
}

function* displayError(error) {
  yield put(
    showAlert({
      type: 'danger',
      title: error.name,
      message: error.message,
    })
  );
}
