import { IError, IFullUser, LoadingStatus } from '../common'

export interface IFullUserState {
  appUser: IFullUser
  loading: LoadingStatus
  requestError: IError
}
