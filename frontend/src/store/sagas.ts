import { all } from 'redux-saga/effects'
import { profileRootSaga } from './ducks/profile/saga'
import { postRootSaga } from './ducks/post/saga'
import { userRootSaga } from './ducks/user/saga'

export function* rootSaga() {
  yield all([userRootSaga(), profileRootSaga(), postRootSaga()])
}
