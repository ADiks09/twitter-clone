import { Action } from 'redux'
import { PostTypes } from './postTypes'
import { LoadingStatus } from '../../common'

export interface IPost {
  text: string
  file?: string
}

export interface IPostCreated {
  message: string
}

export interface IPostCreateAction extends Action<PostTypes> {
  type: PostTypes.CREATE
  payload: IPost
}

export interface IPostLoadingStatusAction extends Action<PostTypes> {
  type: PostTypes.POST_CREATE_LOADING_STATUS,
  payload: LoadingStatus
}

export interface IPostSetCreateSuccessfulAction extends Action<PostTypes> {
  type: PostTypes.POST_CREATE_SET_SUCCESSFUL,
  payload: { message: string }
}

// export interface IPostCreatedAction extends Action<PostTypes> {
//   type: PostTypes.CREATED
//   payload: IPostCreated
// }


export type PostAction = IPostCreateAction | IPostLoadingStatusAction | IPostSetCreateSuccessfulAction
// | IPostCreatedAction
