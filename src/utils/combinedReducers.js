/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import globalReducer from '../containers/App/reducer';
import alertReducer from '../containers/SimpleAlert/reducer';
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    alert: alertReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
