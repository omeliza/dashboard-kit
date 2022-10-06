import { AxiosError, AxiosResponse } from 'axios';
import {
  call,
  delay,
  fork,
  put,
  select,
  StrictEffect,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import {
  loadContactsError,
  loadContactsSuccess,
  createContactSuccess,
  createContactError,
  loadContactsStart,
} from 'store/actions/contacts/contactActions';
import * as types from 'constants/actionTypes';
import { getContacts, addContact } from 'utils/contactsHelpers';
import { ICreateContactStart } from 'store/reducers/contacts/types';
import { AppState } from 'store/reducers/rootReducer';

function* workerGetContacts() {
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
function* workerAddContact(newContact: ICreateContactStart) {
  try {
    const listLength: number = yield select(
      (state: AppState) => state.contacts.list.length,
    );
    const { status }: AxiosResponse = yield call(
      addContact,
      newContact,
      listLength,
    );
    if (status === 201) {
      yield put(createContactSuccess());
      yield put(loadContactsStart());
    }
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      yield put(createContactError(error?.response?.data.message));
    }
  }
}

export function* watchContactsGet(): Generator<StrictEffect> {
  yield takeEvery(types.LOAD_CONTACTS_START, workerGetContacts);
}

export function* watchContactAdd(): Generator<StrictEffect> {
  yield takeLatest(types.CREATE_CONTACT_START, workerAddContact);
}
export const contactSagas = [fork(watchContactsGet), fork(watchContactAdd)];
