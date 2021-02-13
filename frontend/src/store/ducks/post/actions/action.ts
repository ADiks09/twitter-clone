import {
  IPostCreate,
  IPostCreateAction,
  IPostFetchCollectionAction,
  IPostLoadingStatusAction,
  IPostSetCreateSuccessfulAction,
  IPostFetchCollectionPayload,
} from './IPost'
import { PostTypes } from './postTypes'
import { LoadingStatus } from '../../common'

export const postRequestCreateAction = (
  payload: IPostCreate
): IPostCreateAction => ({
  type: PostTypes.POST_CREATE,
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

export const postFetchCollectionAction = (
  payload: IPostFetchCollectionPayload
): IPostFetchCollectionAction => ({
  type: PostTypes.POST_GET_ACTION,
  payload,
})
