import { call, put, takeEvery } from 'redux-saga/effects'
import { ProfileTypes } from './actions/profileTypes'
import axios from 'axios'
import { API_PROFILE } from './state'
import { profileData, profileRequestFailedAction } from './actions/action'
import { authAuthorized, authUnauthorized } from '../../auth'

function* errorHandel(error: any) {
  if (error.response) {
    if (error.response.status === 401) {
      yield put(authUnauthorized())
    }
    yield put(profileRequestFailedAction(error.response.data.message))
  } else if (error.request) {
    console.log(error.request)
    yield put(profileRequestFailedAction(error.request))
  } else {
    console.log('Error', error.message)
  }
}

function* profileFetchData() {
  try {
    const data = yield call(() =>
      axios.get(API_PROFILE.PROFILE_USER).then((response) => response.data.user)
    )
    console.log('---PROFILE USER---', data)
    yield put(authAuthorized())
    yield put(profileData(data))
  } catch (error) {
    yield errorHandel(error)
  }
}

export function* watchProfileFetchData() {
  yield takeEvery(ProfileTypes.PROFILE_FETCH_DATA, profileFetchData)
}
