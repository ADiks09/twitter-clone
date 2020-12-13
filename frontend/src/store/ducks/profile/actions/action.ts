import {
  IProfileDataAction,
  IProfileFetchDataAction,
  IProfileRequestFailedAction,
} from './IProfile'
import { ProfileTypes } from './profileTypes'
import { IError, IFullUser } from '../../common'

export const profileFetchData = (): IProfileFetchDataAction => ({
  type: ProfileTypes.PROFILE_FETCH_DATA,
})

export const profileData = (payload: IFullUser): IProfileDataAction => ({
  type: ProfileTypes.PROFILE_DATA,
  payload,
})

export const profileRequestFailedAction = (
  payload: IError
): IProfileRequestFailedAction => ({
  type: ProfileTypes.PROFILE_REQUEST_FAILED,
  payload,
})
