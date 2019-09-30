import { 
put, takeEvery, delay, all 
} from 'redux-saga/effects';

function* incrementAsync() {
  yield delay(4000);
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
  yield takeEvery('ASYNC_INCREMENT', incrementAsync);
}

function* decrementAsync() {
  yield delay(2000);
  yield put({ type: 'DECREMENT' });
}

function* watchDeccrementAsync() {
  yield takeEvery('ASYNC_DECREMENT', decrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchDeccrementAsync()]);
}
