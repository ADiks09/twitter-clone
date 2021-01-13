import { Action } from 'redux'
import { PostTypes } from './postTypes'
import { LoadingStatus } from '../../common'

export interface IPostCreate {
  text: string
  file?: string
}

export interface IMedia {
  url: string
  originalName: string
}

export interface IPost {
  text: string
  createdAt: Date
  media?: IMedia[]
}

export interface IPostAuthor {
  userName: string
  avatarUrl: string
  firstName: string
  lastName: string
}

export interface IPostByUserNameCollection {
  posts: IPost[]
  author: IPostAuthor
}

export interface IPostCreateAction extends Action<PostTypes> {
  type: PostTypes.POST_CREATE
  payload: IPostCreate
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
  payload: IPostByUserNameCollection
}


export type PostAction =
    IPostCreateAction
  | IPostLoadingStatusAction
  | IPostSetCreateSuccessfulAction
  | IPostFetchCollectionAction
  | IPostSetCollectionAction
