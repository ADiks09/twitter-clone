import { all, call, put, takeLatest } from 'redux-saga/effects'
import { PostTypes } from './actions/postTypes'
import { IPostCreateAction } from './actions/IPost'
import {
  postCreateLoadingStatusAction,
  postCreateSetSuccessful,
} from './actions/action'
import { LoadingStatus } from '../common'
import { postApiCreate } from '../../../services/api/postApi'

function* postRequestCreate(action: IPostCreateAction) {
  const { data, error } = yield call(() => postApiCreate(action.payload))
  if (error) {
    console.error('---POST CREATE ERROR---', error)
    yield put(postCreateLoadingStatusAction(LoadingStatus.ERROR))
    return
  }
  console.log('---POST CREATE SUCCESSFULLY---', data)
  yield put(postCreateSetSuccessful(data.message))
}

function* watchPostRequestCreate() {
  yield takeLatest(PostTypes.POST_CREATE, postRequestCreate)
}

export function* postRootSaga() {
  yield all([watchPostRequestCreate()])
}
