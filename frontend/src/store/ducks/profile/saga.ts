import { call, put, takeEvery } from 'redux-saga/effects'
import { ProfileTypes } from './actions/profileTypes'
import axios from 'axios'
import { IFullUser, LoadingStatus } from '../common'
import { API_PROFILE } from './state'
import { profileData, profileRequestFailedAction } from './actions/action'

export function* profileFetchData() {
  try {
    const data = yield call(() =>
      axios.get(API_PROFILE.PROFILE_USER).then((response) => response.data.user)
    )
    console.log('---PROFILE USER---', data)
    yield put(profileData(data))
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data.message)
      yield put(profileRequestFailedAction(error.response.data.message))
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    // })
    // yield put(userRequestFailedAction(e.response.data))
    // yield put(userLoadingStatus(LoadingStatus.ERROR))
  }
}

export function* watchProfileFetchData() {
  yield takeEvery(ProfileTypes.PROFILE_FETCH_DATA, profileFetchData)
}
