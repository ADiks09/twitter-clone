import { call, takeEvery } from 'redux-saga/effects'
import { PostTypes } from './actions/postTypes'
import { IPostCreateAction } from './actions/IPost'
import axios from 'axios'
import { API_POST } from './state'

function* postRequestCreate(action: IPostCreateAction) {
  try {
    const data = yield call(() =>
      axios
        .post(API_POST.CREATE, {
          text: action.payload.text,
        })
        .then((r) => r.data)
    )
    console.log(data)
  } catch (e) {}
}

export function* watchPostRequestCreate() {
  yield takeEvery(PostTypes.CREATE, postRequestCreate)
}
