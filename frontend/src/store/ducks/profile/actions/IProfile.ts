import { Action } from 'redux'
import { ProfileTypes } from './profileTypes'
import { IError, IFullUser } from '../../common'

export interface IProfile extends IFullUser {}

export interface IProfileFetchDataAction extends Action<ProfileTypes> {
  type: ProfileTypes.PROFILE_FETCH_DATA;
}

export interface IProfileDataAction extends Action<ProfileTypes> {
  type: ProfileTypes.PROFILE_DATA;
  payload: IFullUser;
}

export interface IProfileRequestFailedAction extends Action<ProfileTypes> {
  type: ProfileTypes.PROFILE_REQUEST_FAILED;
  payload: IError;
}

export type ProfileAction =
  | IProfileFetchDataAction
  | IProfileDataAction
  | IProfileRequestFailedAction
