import { all } from 'redux-saga/effects'
import { watchUserFetchLogin } from './ducks/user/saga'

export function* rootSaga() {
  yield all([watchUserFetchLogin()])
}
