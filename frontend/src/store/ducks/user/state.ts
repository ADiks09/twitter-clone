export enum LoadingStatus {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  LOADING = 'LOADING'
}

export interface IUser {
  email: string;
  password: string;
}

export interface IFullUser extends IUser {
  name: string
  phone: string
  birthday: Date
  createdAt?: Date
  token?: string
}

export interface IError {
  message: string,
}

export interface IFullUserState {
  appUser: IFullUser | IUser | {},
  loading: LoadingStatus
  requestError: IError
}
