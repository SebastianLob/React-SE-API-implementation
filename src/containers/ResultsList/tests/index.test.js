import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ShallowRenderer from 'react-test-renderer/shallow';
import ResultsList from '../index';
import state from '../../mocks/state';
import createReducer from '../../../utils/combinedReducers';

describe('ResultsList', () => {
  const renderer = new ShallowRenderer();
  it('should render and match the snapshot', () => {
    const store = createStore(createReducer(), state);
    renderer.render(
      <Provider store={store}>
        <ResultsList />
      </Provider>
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
