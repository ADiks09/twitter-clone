import { IProfileState } from './state'
import { LoadingStatus } from '../common'
import { initialUserState } from '../user/reducer'
import produce, { Draft } from 'immer'
import { ProfileAction } from './actions/IProfile'
import { ProfileTypes } from './actions/profileTypes'

export const initialProfileState: IProfileState = {
  error: { message: '' },
  loading: LoadingStatus.NEVER,
  user: initialUserState.appUser,
}

export const profileReducer = produce(
  (draft: Draft<IProfileState>, action: ProfileAction) => {
    switch (action.type) {
      case ProfileTypes.PROFILE_FETCH_DATA:
        draft.loading = LoadingStatus.LOADING
        break
      case ProfileTypes.PROFILE_DATA:
        draft.user = action.payload
        draft.loading = LoadingStatus.LOADED
        break
      case ProfileTypes.PROFILE_REQUEST_FAILED:
        draft.error = action.payload
        draft.loading = LoadingStatus.ERROR
        break
    }
  },
  initialProfileState
)
