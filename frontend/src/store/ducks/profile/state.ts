import { IError, IFullUser, LoadingStatus } from '../common'

export enum API_PROFILE {
  PROFILE_USER = 'api/profile/user',
}

export interface IProfileState {
  user: IFullUser;
  loading: LoadingStatus;
  error: IError;
}
