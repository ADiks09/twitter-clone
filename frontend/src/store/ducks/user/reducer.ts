import produce, { Draft } from 'immer'
import { IFullUserState } from './state'
import { UserTypes } from './actions/userTypes'
import { UserAction } from './actions/IUser'
import { LoadingStatus } from '../common'

export const initialUserState: IFullUserState = {
  appUser: {
    phone: '',
    lastName: '',
    firstName: '',
    email: '',
    birthday: new Date(Date.now()),
    name: '',
    password: '',
  },
  loading: LoadingStatus.NEVER,
  requestError: { message: '' },
}

export const userReducer = produce(
  (draft: Draft<IFullUserState>, action: UserAction) => {
    switch (action.type) {
      case UserTypes.USER_LOGIN:
        draft.appUser = action.payload
        draft.loading = LoadingStatus.LOADED
        break
      case UserTypes.USER_FETCH_LOGIN:
        draft.loading = LoadingStatus.LOADING
        break
      case UserTypes.USER_SIGN:
        draft.appUser = action.payload
        draft.loading = LoadingStatus.LOADED
        break
      case UserTypes.USER_FETCH_SIGN:
        draft.loading = LoadingStatus.LOADING
        break
      case UserTypes.USER_LOADING_STATUS:
        draft.loading = action.payload
        break
      case UserTypes.USER_REQUEST_FAILED:
        draft.requestError = action.payload
        break
    }
  },
  initialUserState
)
