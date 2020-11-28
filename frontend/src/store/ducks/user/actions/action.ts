import { IFullUser, IUser, LoadingStatus } from '../state'
import { UserTypes } from './userTypes'
import {
  IUserLoadingStatus,
  IUserLoginAction,
  IUserLoginFetchAction,
  IUserRequestFailedAction,
  IUserSignInAction,
  IUserSignInFetchAction,
} from './IUser'

export const userRequestFailedAction = (payload: {
  message: string,
}): IUserRequestFailedAction => ({
  type: UserTypes.USER_REQUEST_FAILED,
  payload,
})

export const userSignIn = (payload: IFullUser): IUserSignInAction => ({
  type: UserTypes.USER_SIGIN,
  payload,
})

export const userFetchSignIn = (
  payload: IFullUser
): IUserSignInFetchAction => ({
  type: UserTypes.USER_FETCH_SIGNIN,
  payload,
})

export const userFetchLogin = (
  payload: IFullUser //| IUser//IUser | IFullUser
): IUserLoginFetchAction => ({
  type: UserTypes.USER_FETCH_LOGIN,
  payload,
})

export const userLoadingStatus = (
  payload: LoadingStatus
): IUserLoadingStatus => ({
  type: UserTypes.USER_LOADING_STATUS,
  payload,
})

export const userLogin = (
  payload: IFullUser /*| IUser*/
): IUserLoginAction => ({
  type: UserTypes.USER_LOGIN,
  payload,
})
