import {put, takeEvery} from 'redux-saga/effects';
import {
  GET_LETTERS_PENDING,
  GET_LETTERS_SUCCESS,
  GET_LETTERS_FAILED,
} from '../constants/actions/letters';

const getLettersSaga = function*() {
  try {
    const responseData = [];
    yield put({type: GET_LETTERS_SUCCESS, payload: responseData})
  } catch (e) {
    yield put({type: GET_LETTERS_FAILED})
  }
};

const lettersSaga = function*() {
  yield takeEvery(GET_LETTERS_PENDING, getLettersSaga)
};

export default lettersSaga
