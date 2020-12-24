import { Action } from 'redux'
import { PostTypes } from './postTypes'
import { LoadingStatus } from '../../common'

export interface IPost {
  text: string
  file?: string
}

export interface IMedia {
  url: string
  originalName: string
}

export interface IPostGet {
  text: string
  createdAt: Date
  media?: Array<IMedia>
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

export interface IPostFetchCollectionAction extends Action<PostTypes> {
  type: PostTypes.POST_GET_ACTION,
  payload: { userName: string }
}

export interface IPostSetCollectionAction extends Action<PostTypes> {
  type: PostTypes.POST_SET_COLLECTION
  payload: Array<IPostGet>
}

// export interface IPostCreatedAction extends Action<PostTypes> {
//   type: PostTypes.CREATED
//   payload: IPostCreated
// }


export type PostAction =
  IPostCreateAction
  | IPostLoadingStatusAction
  | IPostSetCreateSuccessfulAction
  | IPostFetchCollectionAction
| IPostSetCollectionAction
// | IPostCreatedAction
