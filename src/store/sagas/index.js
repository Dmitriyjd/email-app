import {all} from 'redux-saga/effects';
import lettersSaga from './letters';

export default function* rootSaga() {
  yield all([
    lettersSaga(),
  ])
}
