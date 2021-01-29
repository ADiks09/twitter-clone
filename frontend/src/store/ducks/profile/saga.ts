import { all, call, put, takeEvery } from 'redux-saga/effects'
import { AxiosError } from 'axios'
import { ProfileTypes } from './actions/profileTypes'
import { profileData, profileRequestFailedAction } from './actions/action'
import { authAuthorized, authUnauthorized } from '../../auth'
import { profileApiUser } from '../../../services/api/profileApi'

function* errorHandel({ response }: AxiosError) {
  console.error('---PROFILE USER ERROR---', response)
  if (response) {
    if (response.status === 401) {
      yield put(authUnauthorized())
    }
    yield put(profileRequestFailedAction(response.data.message))
  }
}

function* profileFetchData() {
  const { data, error } = yield call(() => profileApiUser())
  if (error) {
    yield errorHandel(error)
    return
  }
  console.log('---PROFILE USER SUCCESSFULLY---', data)
  yield put(authAuthorized())
  yield put(profileData(data))
}

function* watchProfileFetchData() {
  yield takeEvery(ProfileTypes.PROFILE_FETCH_DATA, profileFetchData)
}

export function* profileRootSaga() {
  yield all([watchProfileFetchData()])
}
