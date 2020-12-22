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
    successful: { message: '' },
  },
}

export const postReducer = produce(
  (draft: Draft<IPostState>, action: PostAction) => {
    switch (action.type) {
      case PostTypes.CREATE:
        draft.create.data = action.payload
        draft.create.loading = LoadingStatus.LOADING
        break
      case PostTypes.POST_CREATE_LOADING_STATUS:
        draft.create.loading = action.payload
        break
      case PostTypes.POST_CREATE_SET_SUCCESSFUL:
        draft.create.successful = action.payload
        break
    }
  },
  initialPostState
)
