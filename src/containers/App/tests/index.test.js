import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { MemoryRouter } from 'react-router-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';
import App from '../index';
import ResultsList from '../../ResultsList';
import About from '../../About';
import state from '../../mocks/state';
import createReducer from '../../../utils/combinedReducers';

describe('App Container', () => {
  const renderer = new ShallowRenderer();

  it('should render and match the snapshot', () => {
    const store = createStore(createReducer(), state);
    renderer.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render ResultList on /', () => {
    const store = createStore(createReducer(), state);
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
          <App />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(ResultsList)).toHaveLength(1);
    expect(wrapper.find(About)).toHaveLength(0);
  });
});
