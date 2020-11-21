import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { LoadingStatus } from './state'
import { IUserLoginFetchAction, IUserSignInFetchAction } from './actions/IUser'
import {
  userLoadingStatus,
  userLogin,
  userRequestFailedAction,
  userSignIn,
} from './actions/action'
import { UserTypes } from './actions/userTypes'

// .catch((error) => {
//   if (error.response) {
//     alert(error.response.data.message)
//   } else if (error.request) {
//     console.log(error.request)
//   } else {
//     console.log('Error', error.message)
//   }
// })

export function* userFetchLogin(action: IUserLoginFetchAction) {
  try {
    const data = yield call(() =>
      axios
        .post('/api/auth/login', {
          email: action.payload.email,
          password: action.payload.password,
        })
        .then((response) => response.data.user)
    )
    console.log('---LOG IN---', data)
    yield put(userLogin(data))
  } catch (e) {
    yield put(userRequestFailedAction(e.response.data))
    yield put(userLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* watchUserFetchLogin() {
  yield takeEvery(UserTypes.USER_FETCH_LOGIN, userFetchLogin)
}

export function* userFetchSignIn(action: IUserSignInFetchAction) {
  try {
    const data = yield call(() =>
      axios
        .post('/api/auth/register', {
          email: action.payload.email,
          password: action.payload.password,
          phone: action.payload.phone,
          birthday: action.payload.birthday,
          name: action.payload.name,
        })
        .then((response) => response.data.user)
    )
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
