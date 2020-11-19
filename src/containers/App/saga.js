import { put, takeLatest } from 'redux-saga/effects';

function* AppSaga() {
  yield takeLatest('TEST', sagaConfigured);
}

function* sagaConfigured() {
  yield put({ type: 'SAGA-RUNS' });
}

export default AppSaga;
