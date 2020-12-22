import { call, takeEvery } from 'redux-saga/effects'
import { PostTypes } from './actions/postTypes'
import { IPost, IPostCreateAction } from './actions/IPost'
import axios from 'axios'
import { API_POST } from './state'

const createPost = (payload: IPost) => {
  const formData = new FormData()

  if (payload.file) formData.append('file', payload.file)

  formData.append('text', payload.text)
  axios
    .post(API_POST.CREATE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((t) => t)
}

function* postRequestCreate(action: IPostCreateAction) {
  try {
    const data = yield call(() => createPost(action.payload))
    console.log(data)
  } catch (e) {}
}

export function* watchPostRequestCreate() {
  yield takeEvery(PostTypes.CREATE, postRequestCreate)
}
