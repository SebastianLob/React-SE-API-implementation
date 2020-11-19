import AppSaga from '../containers/App/saga';

export const sagas = { AppSaga };

const runSagas = (sagaMiddleware) => {
  Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};

export default runSagas;
