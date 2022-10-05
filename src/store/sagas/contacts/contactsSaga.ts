import axios, { AxiosError, AxiosResponse } from 'axios';
import {
  call,
  delay,
  fork,
  put,
  StrictEffect,
  takeEvery,
} from 'redux-saga/effects';

import {
  loadContactsError,
  loadContactsSuccess,
} from 'store/actions/contacts/contactActions';
import * as types from 'constants/actionTypes';

async function getContacts() {
  const response = await axios.get('http://localhost:5000/list');
  return response;
}

function* workerContacts() {
  try {
    const response: AxiosResponse = yield call(getContacts);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadContactsSuccess(response.data));
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      yield put(loadContactsError(error?.response?.data.message));
    }
  }
}

export function* watchContactsSaga(): Generator<StrictEffect> {
  yield takeEvery(types.LOAD_CONTACTS_START, workerContacts);
}

export const contactSagas = [fork(watchContactsSaga)];
