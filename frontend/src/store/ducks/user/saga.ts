import { all, call, put, takeEvery } from 'redux-saga/effects'
import { IUserLoginFetchAction, IUserSignInFetchAction } from './actions/IUser'
import {
  userLoadingStatus,
  userLogin,
  userRequestFailedAction,
  userSignIn,
} from './actions/action'
import { UserTypes } from './actions/userTypes'
import { LoadingStatus } from '../common'
import { authAuthorized } from '../../auth'
import { userApiLogin, userApiSignIn } from '../../../services/api/userApi'

function* userFetchLogin(action: IUserLoginFetchAction) {
  const { data, error } = yield call(() => userApiLogin(action.payload))
  if (error) {
    console.error('---LOG IN ERROR---', error.response)
    yield put(userRequestFailedAction(error.response.data))
    yield put(userLoadingStatus(LoadingStatus.ERROR))
    return
  }
  console.log('---LOG IN SUCCESSFULLY---', data)
  yield put(authAuthorized())
  yield put(userLogin(data))
}

function* watchUserFetchLogin() {
  yield takeEvery(UserTypes.USER_FETCH_LOGIN, userFetchLogin)
}

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
  yield all([watchUserFetchLogin(), watchUserFetchSignIn()])
}
