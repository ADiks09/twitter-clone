import { call, put, takeEvery } from 'redux-saga/effects'
import { PostTypes } from './actions/postTypes'
import { IPost, IPostCreateAction } from './actions/IPost'
import axios from 'axios'
import { API_POST } from './state'
import {
  postCreateLoadingStatusAction,
  postCreateSetSuccessful,
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
    console.log(data)
  } catch (e) {
    yield put(postCreateLoadingStatusAction(LoadingStatus.ERROR))
  }
}

export function* watchPostRequestCreate() {
  yield takeEvery(PostTypes.CREATE, postRequestCreate)
}
