import { Action } from 'redux'
import { PostTypes } from './postTypes'

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


// export interface IPostCreatedAction extends Action<PostTypes> {
//   type: PostTypes.CREATED
//   payload: IPostCreated
// }


export type PostAction = IPostCreateAction
  // | IPostCreatedAction
