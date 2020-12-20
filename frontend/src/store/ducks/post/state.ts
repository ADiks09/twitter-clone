import { IError, LoadingStatus } from '../common'
import { IPost } from './actions/IPost'

export enum API_POST {
  CREATE= '/api/post/create'
}

export interface IPostState {
  create: {
    data : IPost
    loading: LoadingStatus
    requestError: IError
  }
}
