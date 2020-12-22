import {
  IPost,
  IPostCreateAction,
  IPostLoadingStatusAction,
  IPostSetCreateSuccessfulAction,
} from './IPost'
import { PostTypes } from './postTypes'
import { LoadingStatus } from '../../common'

export const postRequestCreateAction = (payload: IPost): IPostCreateAction => ({
  type: PostTypes.CREATE,
  payload,
})

export const postCreateLoadingStatusAction = (
  payload: LoadingStatus
): IPostLoadingStatusAction => ({
  type: PostTypes.POST_CREATE_LOADING_STATUS,
  payload,
})

export const postCreateSetSuccessful = (
  payload: string
): IPostSetCreateSuccessfulAction => ({
  type: PostTypes.POST_CREATE_SET_SUCCESSFUL,
  payload: { message: payload },
})

// export const postCreatedAction = (
//   payload: IPostCreated
// ): IPostCreatedAction => ({
//   type: PostTypes.CREATED,
//   payload,
// })
