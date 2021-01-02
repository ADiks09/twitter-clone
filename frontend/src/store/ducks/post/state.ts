import { IError, LoadingStatus } from '../common'
import { IPost, IPostGetCollection } from './actions/IPost'

export enum API_POST {
  CREATE = '/api/post/create',
  GET_POST_COLLECTION = '/api/post/postsByUserName'
}

export interface IPostState {
  create: {
    data: IPost
    loading: LoadingStatus
    requestError: IError
    successful: { message: string }
  }
  posts: {
    userName: string
    loading: LoadingStatus
    requestError: IError
    data: IPostGetCollection
  }
}
