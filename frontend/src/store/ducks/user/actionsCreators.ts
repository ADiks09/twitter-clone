import { IFullUser, IUser } from './contracts/state'
import { Action } from 'redux'

export enum UserTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_FETCH_LOGIN = 'USER_FETCH_LOGIN',
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

export interface IUserLoginAction extends Action<UserTypes> {
  type: UserTypes.USER_LOGIN;
  payload: IUser | IFullUser;
}

export const userLogin = (payload: IUser | IFullUser): IUserLoginAction => ({
  type: UserTypes.USER_LOGIN,
  payload,
})

export type UserAction = IUserLoginAction | IUserLoginFetchAction
