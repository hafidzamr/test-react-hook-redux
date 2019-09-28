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
        number: state.number + 1,
      };

    case 'ADD_DECREMENT':
      return {
        number: state.number - 1,
      };

    default:
      return state;
  }
}

const store = createStore(
  reducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export function StateProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
