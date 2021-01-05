import { Action } from 'redux'
import { UserTypes } from './userTypes'
import { IFullUser, LoadingStatus } from '../../common'

export interface IUserRequestFailedAction extends Action<UserTypes> {
  type: UserTypes.USER_REQUEST_FAILED;
  payload: {
    message: string,
  };
}

export interface IUserRequestProfile extends Action<UserTypes> {
  type: UserTypes.USER_REQUEST_FAILED;
  payload: IFullUser;
}

export interface IUserSignInAction extends Action<UserTypes> {
  type: UserTypes.USER_SIGN;
  payload: IFullUser;
}

export interface IUserSignInFetchAction extends Action<UserTypes> {
  type: UserTypes.USER_FETCH_SIGN;
  payload: IFullUser;
}

export interface IUserLoginFetchAction extends Action<UserTypes> {
  type: UserTypes.USER_FETCH_LOGIN;
  payload: IFullUser;
}

export interface IUserLoadingStatus extends Action<UserTypes> {
  type: UserTypes.USER_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface IUserLoginAction extends Action<UserTypes> {
  type: UserTypes.USER_LOGIN;
  payload: IFullUser;
}

export type UserAction =
  | IUserLoginAction
  | IUserLoginFetchAction
  | IUserLoadingStatus
  | IUserSignInAction
  | IUserSignInFetchAction
  | IUserRequestFailedAction
