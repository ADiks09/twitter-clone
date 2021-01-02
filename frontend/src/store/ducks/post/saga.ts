import { call, put, takeLatest } from 'redux-saga/effects'
import { PostTypes } from './actions/postTypes'
import { IPostCreateAction, IPostFetchCollectionAction } from './actions/IPost'
import axios from 'axios'
import { API_POST } from './state'
import {
  postCreateLoadingStatusAction,
  postCreateSetSuccessful,
  postSetCollectionAction,
} from './actions/action'
import { LoadingStatus } from '../common'

function* postRequestCreate(action: IPostCreateAction) {
  try {
    const formData = new FormData()
    const data: { message: string } = yield call(() => {
      if (action.payload.file) formData.append('file', action.payload.file)
      formData.append('text', action.payload.text)
      return axios
        .post(API_POST.CREATE, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((t) => t.data)
    })
    yield put(postCreateLoadingStatusAction(LoadingStatus.LOADED))
    yield put(postCreateSetSuccessful(data.message))
    console.log('---POST CREATE RESPONSE---', data)
  } catch (e) {
    yield put(postCreateLoadingStatusAction(LoadingStatus.ERROR))
  }
}

export function* watchPostRequestCreate() {
  yield takeLatest(PostTypes.CREATE, postRequestCreate)
}

function* postFetchCollectionAction(action: IPostFetchCollectionAction) {
  try {
    const data = yield call(() =>
      axios
        .get(`${API_POST.GET_POST_COLLECTION}/${action.payload.userName}`)
        .then((r) => r.data)
    )
    console.log('---GET POST BY USER NAME---', data)
    yield put(postSetCollectionAction(data))
  } catch (e) {}
}

export function* watchPostFetchCollection() {
  yield takeLatest(PostTypes.POST_GET_ACTION, postFetchCollectionAction)
}
