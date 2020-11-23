import { SHOW_ALERT, HIDE_ALERT } from './constants';

const initialState = {
  open: false,
  type: 'danger',
  title: '',
  message: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        open: true,
        type: action.payload.type,
        title: action.payload.title,
        message: action.payload.message,
      };
    case HIDE_ALERT:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};

export default reducer;
