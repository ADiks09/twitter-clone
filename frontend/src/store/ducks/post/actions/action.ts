import { IPost, IPostCreateAction, IPostLoadingStatusAction } from './IPost'
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

// export const postCreatedAction = (
//   payload: IPostCreated
// ): IPostCreatedAction => ({
//   type: PostTypes.CREATED,
//   payload,
// })
