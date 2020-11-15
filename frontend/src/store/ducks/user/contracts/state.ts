export enum LoadingStatus {
  LOADED = 'LOADED',
  ERROR = 'ERROR',
  NEVER = 'NEVER'
}

export interface IUser {
  email: string;
  password: string;
}

export interface IFullUser extends IUser {
  token: string
  name: string
  phone: string
  birthday: Date
  createdAt: Date
}

export interface IFullUserState {
  appUser: IFullUser | IUser | {},
  loading: LoadingStatus
}
