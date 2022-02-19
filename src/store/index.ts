export const initialState = {
  value: 0,
};

export const countReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'increment':
      return { value: state.value + (action.payload || 1) };
    case 'decrement':
      return { value: state.value - (action.payload || 1) };
    default:
      return state;
  }
};
