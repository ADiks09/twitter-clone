import { IFullUser, IUser, LoadingStatus } from './state'
import { Action } from 'redux'

export enum UserTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_SIGIN = 'USER_SIGNIN',
  USER_FETCH_LOGIN = 'USER_FETCH_LOGIN',
  USER_FETCH_SIGNIN = 'USER_FETCH_SIGNIN',
  USER_LOADING_STATUS = 'USER_LOADING_STATUS',
  USER_REQUEST_FAILED = 'USER_REQUEST_FAILED',
}

export interface IUserRequestFailedAction extends Action<UserTypes> {
  type: UserTypes.USER_REQUEST_FAILED;
  payload: {
    message: string,
  };
}

export const userRequestFailedAction = (payload: {
  message: string,
}): IUserRequestFailedAction => ({
  type: UserTypes.USER_REQUEST_FAILED,
  payload,
})

export interface IUserSignInAction extends Action<UserTypes> {
  type: UserTypes.USER_SIGIN;
  payload: IFullUser;
}

export const userSignIn = (payload: IFullUser): IUserSignInAction => ({
  type: UserTypes.USER_SIGIN,
  payload,
})

export interface IUserSignInFetchAction extends Action<UserTypes> {
  type: UserTypes.USER_FETCH_SIGNIN;
  payload: IFullUser;
}

export const userFetchSignIn = (
  payload: IFullUser
): IUserSignInFetchAction => ({
  type: UserTypes.USER_FETCH_SIGNIN,
  payload,
})

export interface IUserLoginFetchAction extends Action<UserTypes> {
  type: UserTypes.USER_FETCH_LOGIN;
  payload: IUser | IFullUser;
}

export const userFetchLogin = (
  payload: IUser | IFullUser
): IUserLoginFetchAction => ({
  type: UserTypes.USER_FETCH_LOGIN,
  payload,
})

export interface IUserLoadingStatus extends Action<UserTypes> {
  type: UserTypes.USER_LOADING_STATUS;
  payload: LoadingStatus;
}

export const userLoadingStatus = (
  payload: LoadingStatus
): IUserLoadingStatus => ({
  type: UserTypes.USER_LOADING_STATUS,
  payload,
})

export interface IUserLoginAction extends Action<UserTypes> {
  type: UserTypes.USER_LOGIN;
  payload: IUser | IFullUser;
}

export const userLogin = (payload: IUser | IFullUser): IUserLoginAction => ({
  type: UserTypes.USER_LOGIN,
  payload,
})

export type UserAction =
  | IUserLoginAction
  | IUserLoginFetchAction
  | IUserLoadingStatus
  | IUserSignInAction
  | IUserSignInFetchAction
  | IUserRequestFailedAction
