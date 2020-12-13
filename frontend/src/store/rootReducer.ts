import { combineReducers } from 'redux'
import { userReducer } from './ducks/user/reducer'
import { IFullUserState } from './ducks/user/state'
import { IProfileState } from './ducks/profile/state'
import { profileReducer } from './ducks/profile/reducer'
import { authReducer, IInitialAuthState } from './auth'

export interface IRootReducer {
  auth: IFullUserState;
  profile: IProfileState;
  authorized: IInitialAuthState;
}

export const rootReducer = combineReducers({
  auth: userReducer,
  profile: profileReducer,
  authorized: authReducer,
})
