import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { IUserLoginFetchAction, IUserSignInFetchAction } from './actions/IUser'
import {
  userLoadingStatus,
  userLogin,
  userRequestFailedAction,
  userSignIn,
} from './actions/action'
import { UserTypes } from './actions/userTypes'
import { LoadingStatus } from '../common'
import { API_USER } from './state'
import { authAuthorized } from '../../auth'

// .catch((error) => {
//   if (error.response) {
//     alert(error.response.data.message)
//   } else if (error.request) {
//     console.log(error.request)
//   } else {
//     console.log('Error', error.message)
//   }
// })

function* userFetchLogin(action: IUserLoginFetchAction) {
  try {
    const data = yield call(() =>
      axios
        .post(API_USER.LOGIN, {
          email: action.payload.email,
          password: action.payload.password,
        })
        .then((response) => response.data.user)
    )
    console.log('---LOG IN---', data)
    yield put(authAuthorized())
    yield put(userLogin(data))
  } catch (e) {
    yield put(userRequestFailedAction(e.response.data))
    yield put(userLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* watchUserFetchLogin() {
  yield takeEvery(UserTypes.USER_FETCH_LOGIN, userFetchLogin)
}

function* userFetchSignIn(action: IUserSignInFetchAction) {
  try {
    const data = yield call(() => {
      axios
        .post(API_USER.REGISTER, action.payload)
        .then((response) => response.data.user)
    })
    console.log('---SIGN IN---', data)
    yield put(userSignIn(data))
  } catch (e) {
    yield put(userRequestFailedAction(e.response.data))
    yield put(userLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* watchUserFetchSignIn() {
  yield takeEvery(UserTypes.USER_FETCH_SIGNIN, userFetchSignIn)
}
