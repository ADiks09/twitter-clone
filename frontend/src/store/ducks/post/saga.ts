import { all, call, put, takeLatest } from 'redux-saga/effects'
import { PostTypes } from './actions/postTypes'
import { IPostCreateAction, IPostFetchCollectionAction } from './actions/IPost'
import {
  postCreateLoadingStatusAction,
  postCreateSetSuccessful,
  postSetCollectionAction,
} from './actions/action'
import { LoadingStatus } from '../common'
import { postApiCreate, postsByUserName } from '../../../services/api/postApi'

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

function* postFetchCollectionAction({ payload }: IPostFetchCollectionAction) {
  const { data, error } = yield call(() => postsByUserName(payload))
  if (error) {
    console.error('---GET POST BY USER NAME ERROR---', error)
  }
  console.log('---GET POST BY USER NAME SUCCESSFULLY---', data)
  yield put(postSetCollectionAction(data))
}

function* watchPostFetchCollection() {
  yield takeLatest(PostTypes.POST_GET_ACTION, postFetchCollectionAction)
}

export function* postRootSaga() {
  yield all([watchPostRequestCreate(), watchPostFetchCollection()])
}
