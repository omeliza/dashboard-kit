import { StrictEffect } from 'redux-saga/effects';

// eslint-disable-next-line require-yield
export function* watchContactsSaga(): Generator<StrictEffect> {
  // yield takeEvery('ADD_CONTACT');
  // yield takeEvery('UPDATE_CONTACT');
  // yield takeEvery('DELETE_CONTACT');
  // yield takeEvery('SET_CURRENT_CONTACT_ID');
  // yield takeEvery('SET_CURRENT_CONTACT');
  // yield takeEvery('SET_SEARCH_NAME');
  // yield takeEvery('SET_ORDER');
  // eslint-disable-next-line no-console
  console.log('contacts saga');
}
