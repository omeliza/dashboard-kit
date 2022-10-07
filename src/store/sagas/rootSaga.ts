import { all } from 'redux-saga/effects';

import { contactSagas } from 'store/sagas/contacts/contactsSaga';

export default function* rootSaga() {
  yield all([...contactSagas]);
}
