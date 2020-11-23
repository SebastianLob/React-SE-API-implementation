import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import App from './containers/App';
import getStore from './utils/getStore';

import './index.css';

const initialState = {};

const store = getStore(initialState);
const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE
);
