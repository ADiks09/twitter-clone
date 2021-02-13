import { IError, LoadingStatus } from '../common'
import { IPostCreate } from './actions/IPost'

export interface IPostState {
  create: {
    data: IPostCreate
    loading: LoadingStatus
    requestError: IError
    successful: { message: string }
  }
}
