import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StateProvider } from './redux/store';

function App() {
  return (
    <StateProvider>
      <Test />
    </StateProvider>
  );
}

function Test() {
  const Data = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>State = {Data}</h1>
      <button type="button" onClick={() => dispatch({ type: 'ASYNC_INCREMENT' })}>
        Increment State
      </button>
      <button type="button" onClick={() => dispatch({ type: 'ASYNC_DECREMENT' })}>
        Decrement State
      </button>
    </div>
  );
}

export default App;
