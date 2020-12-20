import { Action } from 'redux'
import { PostTypes } from './postTypes'

export interface IPost {
  text: string
}

export interface IPostCreateAction extends Action<PostTypes> {
  type: PostTypes.CREATE
  payload: IPost
}

export type PostAction = IPostCreateAction
