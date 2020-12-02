import { combineReducers } from 'redux'
import { userReducer } from './ducks/user/reducer'
import { IFullUserState } from './ducks/user/state'
import { IProfileState } from './ducks/profile/state'
import { profileReducer } from './ducks/profile/reducer'

export interface IRootReducer {
  auth: IFullUserState;
  profile: IProfileState;
}

export const rootReducer = combineReducers({
  auth: userReducer,
  profile: profileReducer,
})
