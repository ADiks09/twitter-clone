import { all } from 'redux-saga/effects'
import { watchUserFetchLogin, watchUserFetchSignIn } from './ducks/user/saga'
import { watchProfileFetchData } from './ducks/profile/saga'
import { watchPostRequestCreate } from './ducks/post/saga'

export function* rootSaga() {
  yield all([
    watchUserFetchLogin(),
    watchUserFetchSignIn(),
    watchProfileFetchData(),
    watchPostRequestCreate(),
  ])
}
