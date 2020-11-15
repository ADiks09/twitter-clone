import { put, takeEvery, call } from 'redux-saga/effects'
import { IUserLoginFetchAction, UserTypes } from './actionsCreators'
import axios from 'axios'

export function* userFetchLogin(action: IUserLoginFetchAction) {
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
          console.log(error.response.status)
          console.log(error.response.headers)
        } else if (error.request) {
          console.log(error.request)
        } else {
          console.log('Error', error.message)
        }
      })
  )
  console.log('AAAAAAAAAAAAAAAAAAAAAAAA', data)
  yield put({ type: UserTypes.USER_LOGIN, payload: data })
}

export function* watchUserFetchLogin() {
  yield takeEvery(UserTypes.USER_FETCH_LOGIN, userFetchLogin)
}
