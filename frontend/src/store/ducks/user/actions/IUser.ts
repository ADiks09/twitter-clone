import { Action } from 'redux'
import { IFullUser, IUser, LoadingStatus } from '../state'
import { UserTypes } from './userTypes'

export interface IUserRequestFailedAction extends Action<UserTypes> {
  type: UserTypes.USER_REQUEST_FAILED;
  payload: {
    message: string,
  };
}

export interface IUserSignInAction extends Action<UserTypes> {
  type: UserTypes.USER_SIGIN;
  payload: IFullUser;
}

export interface IUserSignInFetchAction extends Action<UserTypes> {
  type: UserTypes.USER_FETCH_SIGNIN;
  payload: IFullUser;
}

export interface IUserLoginFetchAction extends Action<UserTypes> {
  type: UserTypes.USER_FETCH_LOGIN;
  payload: IUser | IFullUser;
}

export interface IUserLoadingStatus extends Action<UserTypes> {
  type: UserTypes.USER_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface IUserLoginAction extends Action<UserTypes> {
  type: UserTypes.USER_LOGIN;
  payload: IUser | IFullUser;
}

export type UserAction =
  | IUserLoginAction
  | IUserLoginFetchAction
  | IUserLoadingStatus
  | IUserSignInAction
  | IUserSignInFetchAction
  | IUserRequestFailedAction
