import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createMiddlewareSaga from 'redux-saga';
import reducer from '../reducer';
import rootSaga from '../saga';

const sagaMiddleware = createMiddlewareSaga();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(reducer, enhancers);
sagaMiddleware.run(rootSaga);

export function StateProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
