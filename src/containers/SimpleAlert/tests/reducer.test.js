import { SHOW_ALERT, HIDE_ALERT } from '../constants';
import reducer from '../reducer';

describe('Simple Alert Reducer', () => {
  let state = {
    open: false,
    type: 'danger',
    title: '',
    message: '',
  };

  let newState = state;
  afterEach(() => {
    state = newState;
  });

  const actionCreator = (actionName) => ({
    type: actionName,
    payload: {
      type: 'type',
      title: 'message',
      message: 'test',
    },
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it('should handle SHOW_ALERT', () => {
    newState = reducer(state, actionCreator(SHOW_ALERT));
    expect(newState).toEqual({
      type: 'type',
      title: 'message',
      message: 'test',
      open: true,
    });
  });

  it('should handle HIDE_ALERT', () => {
    newState = reducer(newState, actionCreator(HIDE_ALERT));
    expect(newState).toEqual({
      ...state,
      open: false,
    });
  });
});
