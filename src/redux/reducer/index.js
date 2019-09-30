const INITIAL_STATE = {
  number: 1,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        number: state.number + 1,
      };

    case 'DECREMENT':
      return {
        number: state.number - 1,
      };

    default:
      return state;
  }
}

export default reducer;
