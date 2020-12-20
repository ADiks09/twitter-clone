import produce, { Draft } from 'immer'
import { PostAction } from './actions/IPost'
import { IPostState } from './state'
import { PostTypes } from './actions/postTypes'
import { LoadingStatus } from '../common'

export const initialPostState: IPostState = {
  create: {
    data: {
      text: '',
    },
    loading: LoadingStatus.NEVER,
    requestError: { message: '' },
  },
}

export const postReducer = produce(
  (draft: Draft<IPostState>, action: PostAction) => {
    switch (action.type) {
      case PostTypes.CREATE:
        draft.create.data = action.payload
        draft.create.loading = LoadingStatus.LOADING
    }
  },
  initialPostState
)
