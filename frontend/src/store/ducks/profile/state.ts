import { IError, IFullUser, LoadingStatus } from '../common'

export interface IProfileState {
  user: IFullUser;
  loading: LoadingStatus;
  error: IError;
}
