import { IError, IFullUser, LoadingStatus } from '../common'

export enum API_USER {
  REGISTER = '/api/auth/register',
  LOGIN = '/api/auth/login'
}

export interface IFullUserState {
  appUser: IFullUser //| IUser//| IUser | {},
  loading: LoadingStatus
  requestError: IError
}
