const initialState = {
  configured: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        configured: true,
      };
    default:
      return state;
  }
}
