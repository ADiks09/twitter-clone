import { UserTypes } from './userTypes'
import {
  IUserLoadingStatus,
  IUserLoginAction,
  IUserLoginFetchAction,
  IUserRequestProfile,
  IUserRequestFailedAction,
  IUserSignInAction,
  IUserSignInFetchAction,
} from './IUser'
import { IError, IFullUser, LoadingStatus } from '../../common'

export const userRequestFailedAction = (
  payload: IError
): IUserRequestFailedAction => ({
  type: UserTypes.USER_REQUEST_FAILED,
  payload,
})

export const userRequestProfileAction = (
  payload: IFullUser
): IUserRequestProfile => ({
  type: UserTypes.USER_REQUEST_FAILED,
  payload,
})

export const userSignIn = (payload: IFullUser): IUserSignInAction => ({
  type: UserTypes.USER_SIGN,
  payload,
})

export const userFetchSignIn = (
  payload: IFullUser
): IUserSignInFetchAction => ({
  type: UserTypes.USER_FETCH_SIGN,
  payload,
})

export const userFetchLogin = (payload: IFullUser): IUserLoginFetchAction => ({
  type: UserTypes.USER_FETCH_LOGIN,
  payload,
})

export const userLoadingStatus = (
  payload: LoadingStatus
): IUserLoadingStatus => ({
  type: UserTypes.USER_LOADING_STATUS,
  payload,
})

export const userLogin = (payload: IFullUser): IUserLoginAction => ({
  type: UserTypes.USER_LOGIN,
  payload,
})
