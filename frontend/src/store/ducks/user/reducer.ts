import { IFullUserState, LoadingStatus } from './contracts/state'
import produce, { Draft } from 'immer'
import { UserAction, UserTypes } from './actionsCreators'

export const initialUserState: IFullUserState = {
  appUser: {},
  loading: LoadingStatus.NEVER,
}

export const userReducer = produce(
  (draft: Draft<IFullUserState>, action: UserAction) => {
    const { type, payload } = action
    console.log('REDUCER', action)
    switch (type) {
      case UserTypes.USER_LOGIN:
        draft.appUser = payload
        break
      case UserTypes.USER_FETCH_LOGIN:
        draft.appUser = payload
        break
    }
  },
  initialUserState
)
