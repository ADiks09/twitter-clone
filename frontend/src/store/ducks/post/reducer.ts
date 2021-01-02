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
  posts: {
    userName: '',
    loading: LoadingStatus.NEVER,
    requestError: { message: '' },
    data: {
      posts: [],
      author: {
        avatarUrl: '',
        userName: '',
      },
    },
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
      case PostTypes.POST_GET_ACTION:
        draft.posts.loading = LoadingStatus.LOADING
        draft.posts.userName = action.payload.userName
        break
      case PostTypes.POST_SET_COLLECTION:
        draft.posts.loading = LoadingStatus.LOADED
        draft.posts.data = action.payload
        break
    }
  },
  initialPostState
)
