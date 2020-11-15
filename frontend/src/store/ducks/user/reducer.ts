import produce, { Draft } from 'immer'
import { IFullUserState, LoadingStatus } from './state'
import { UserAction, UserTypes } from './actionsCreators'

export const initialUserState: IFullUserState = {
  appUser: {},
  loading: LoadingStatus.NEVER,
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
      case UserTypes.USER_LOADING_STATUS:
        draft.loading = action.payload
        break
    }
  },
  initialUserState
)
