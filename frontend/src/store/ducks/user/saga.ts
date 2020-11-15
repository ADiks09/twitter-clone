import { call, put, takeEvery } from 'redux-saga/effects'
import {
  IUserLoginFetchAction,
  userLoadingStatus,
  userLogin,
  UserTypes,
} from './actionsCreators'
import axios from 'axios'
import { LoadingStatus } from './state'

export function* userFetchLogin(action: IUserLoginFetchAction) {
  try {
    const data = yield call(() =>
      axios
        .post('/api/auth/login', {
          email: action.payload.email,
          password: action.payload.password,
        })
        .then((response) => response.data.user)
        .catch((error) => {
          if (error.response) {
            alert(error.response.data.message)
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
        })
    )
    console.log('AAAAAAAAAAAAAAAAAAAAAAAA', data)
    yield put(userLogin(data))
  } catch (e) {
    yield put(userLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* watchUserFetchLogin() {
  yield takeEvery(UserTypes.USER_FETCH_LOGIN, userFetchLogin)
}
