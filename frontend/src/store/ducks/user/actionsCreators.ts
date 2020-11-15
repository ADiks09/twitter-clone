import { IFullUser, IUser, LoadingStatus } from './state'
import { Action } from 'redux'

export enum UserTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_FETCH_LOGIN = 'USER_FETCH_LOGIN',
  USER_LOADING_STATUS = 'USER_LOADING_STATUS',
}

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
