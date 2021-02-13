import { all, call, put, takeEvery } from 'redux-saga/effects'
import { IUserSignInFetchAction } from './actions/IUser'
import {
  userLoadingStatus,
  userRequestFailedAction,
  userSignIn,
} from './actions/action'
import { UserTypes } from './actions/userTypes'
import { LoadingStatus } from '../common'
import { userApiSignIn } from '../../../services/api/userApi'

function* userFetchSignIn(action: IUserSignInFetchAction) {
  const { data, error } = yield call(() => userApiSignIn(action.payload))
  if (error) {
    console.error('---SIGN IN ERROR---', error.response)
    yield put(userRequestFailedAction(error.response.data))
    yield put(userLoadingStatus(LoadingStatus.ERROR))
    return
  }
  console.log('---SIGN IN SUCCESSFULLY---', data)
  yield put(userSignIn(data))
}

function* watchUserFetchSignIn() {
  yield takeEvery(UserTypes.USER_FETCH_SIGN, userFetchSignIn)
}

export function* userRootSaga() {
  yield all([watchUserFetchSignIn()])
}
