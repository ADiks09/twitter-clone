import { all } from 'redux-saga/effects'
import { watchUserFetchLogin, watchUserFetchSignIn } from './ducks/user/saga'

export function* rootSaga() {
  yield all([watchUserFetchLogin(), watchUserFetchSignIn()])
}
