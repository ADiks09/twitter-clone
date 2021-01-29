import { IError, LoadingStatus } from '../common'
import { IPostCreate, IPostByUserNameCollection } from './actions/IPost'

export interface IPostState {
  create: {
    data: IPostCreate
    loading: LoadingStatus
    requestError: IError
    successful: { message: string }
  }
  posts: {
    userName: string
    loading: LoadingStatus
    requestError: IError
    data: IPostByUserNameCollection
  }
}
