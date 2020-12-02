import { Action } from 'redux'
import { UserTypes } from './userTypes'
import { IFullUser, IUser, LoadingStatus } from '../../common'

export interface IUserRequestFailedAction extends Action<UserTypes> {
  type: UserTypes.USER_REQUEST_FAILED;
  payload: {
    message: string,
  };
}

export interface IUserReqestProfile extends Action<UserTypes> {
  type: UserTypes.USER_REQUEST_FAILED;
  payload: IFullUser;
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
  payload: IFullUser; //| IUser ;
}

export interface IUserLoadingStatus extends Action<UserTypes> {
  type: UserTypes.USER_LOADING_STATUS;
  payload: LoadingStatus;
}

export interface IUserLoginAction extends Action<UserTypes> {
  type: UserTypes.USER_LOGIN;
  payload: IFullUser; // | IUser;
}

export type UserAction =
  | IUserLoginAction
  | IUserLoginFetchAction
  | IUserLoadingStatus
  | IUserSignInAction
  | IUserSignInFetchAction
  | IUserRequestFailedAction
