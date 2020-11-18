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
  birthday: number | Date | string
  createdAt?: Date
  token?: string
}

export interface IFullUserState {
  appUser: IFullUser | IUser | {},
  loading: LoadingStatus
}
