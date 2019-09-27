import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const INITIAL_STATE = {
  number: 1,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_INCREMENT':
      return {
        ...state,
        number: state.number + 1,
      };

    case 'ADD_DECREMENT':
      return {
        ...state,
        number: state.number - 1,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

// eslint-disable-next-line import/prefer-default-export
export function StateProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
